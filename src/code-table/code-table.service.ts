import {
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

import { DataSetDTO } from '../dto/dataset.dto';
import { DataSetMap } from '../maps/dataset.map';
import { CodeTableRepository } from './code-table.repository';

@Injectable()
export class CodeTableService {
  private readonly templateCode = 'MDM';

  constructor(
    @InjectRepository(CodeTableRepository)
    private readonly repository: CodeTableRepository,
    private readonly map: DataSetMap,
  ) {}

  async listCodeTables(): Promise<DataSetDTO[]> {
    const results = await this.repository.getDataSets(this.templateCode);
    return this.map.many(results);
  }

  async getCodeTable(codeTable: string): Promise<any[]> {
    const queryColumns = [];
    const dataSet = await this.repository.getDataSet(codeTable, this.templateCode);

    if (dataSet === null || dataSet === undefined) {
      throw new LoggingException(`/${codeTable} is not a valid path. Please refer to the list of available code tables using the /list method.`, HttpStatus.BAD_REQUEST);
    }

    queryColumns.push(
      dataSet.tables[0].columns.map(col => `${col.name} AS "${col.alias}"`)
    );    

    const query = dataSet.tables[0].sqlStatement
      .replace('*', queryColumns.join(','));

    return this.repository.getCodeTable(query);
  }
}
