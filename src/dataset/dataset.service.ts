import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EaseyException } from '@us-epa-camd/easey-common/exceptions';

import { DataSetRepository } from './dataset.repository';

@Injectable()
export class DataSetService {
  constructor(
    @InjectRepository(DataSetRepository)
    private readonly repository: DataSetRepository,
  ) {}

  async listDataSetsByGroup(groupCode: string) {
    const results = await this.repository.find({
      where: { groupCode },
    });

    return results.map(e => {
      return {
        code: e.code,
        name: e.displayName,
      };
    });
  }

  async getDataSet(dataSetCode: string, groupCode: string): Promise<any[]> {
    const queryColumns = [];
    const dataSet = await this.repository.getDataSet(dataSetCode, groupCode);

    if (dataSet === null || dataSet === undefined) {
      if (groupCode === 'MDMREL') {
        throw new EaseyException(
          new Error(
            `/relationships/${dataSetCode} is not a valid Master Data relationships path. Please refer to the list of available relationships using the /master-data-mgmt/relationships/list method.`,
          ),
          HttpStatus.BAD_REQUEST,
        );
      }

      throw new EaseyException(
        new Error(
          `/${dataSetCode} is not a valid Master Data path. Please refer to the list of available paths using the /master-data-mgmt/list method.`,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }

    queryColumns.push(
      dataSet.tables[0].columns.map(col => `${col.name} AS "${col.alias}"`),
    );

    const REGEX=/\*/;
    const query = dataSet.tables[0].sqlStatement.replace(
      REGEX,
      queryColumns.join(','),
    );

    return this.repository.getDataSetResults(query);
  }
}
