import {
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

import { DataSetDTO } from '../dto/dataset.dto';
import { DataSetMap } from '../maps/dataset.map';
import { DataSetRepository } from './dataset.repository';

@Injectable()
export class DataSetService {

  constructor(
    @InjectRepository(DataSetRepository)
    private readonly repository: DataSetRepository,
    private readonly map: DataSetMap,
  ) {}

  async listDataSets(groupCode: string): Promise<DataSetDTO[]> {
    const results = await this.repository.getDataSets(groupCode);
    return this.map.many(results);
  }

  async getDataSet(dataSetCode: string, groupCode: string): Promise<any[]> {
    const queryColumns = [];
    const dataSet = await this.repository.getDataSet(dataSetCode, groupCode);

    if (dataSet === null || dataSet === undefined) {
      if (groupCode === 'MDMREL') {
        throw new LoggingException(`/relationships/${dataSetCode} is not a valid Master Data relationships path. Please refer to the list of available relationships using the /master-data-mgmt/relationships/list method.`, HttpStatus.BAD_REQUEST);
      }

      throw new LoggingException(`/${dataSetCode} is not a valid Master Data path. Please refer to the list of available paths using the /master-data-mgmt/list method.`, HttpStatus.BAD_REQUEST);
    }

    queryColumns.push(
      dataSet.tables[0].columns.map(col => `${col.name} AS "${col.alias}"`)
    );

    const query = dataSet.tables[0].sqlStatement
      .replace('*', queryColumns.join(','));

    return this.repository.getDataSetResults(query);
  }
}