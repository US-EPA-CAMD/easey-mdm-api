import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { DataSet } from '../entities/dataset.entity';
import { DataSetDTO } from '../dto/dataset.dto';
import { DataTableMap } from './datatable.map';

@Injectable()
export class DataSetMap extends BaseMap<DataSet, DataSetDTO> {

  constructor(private readonly tableMap: DataTableMap) {
    super();
  }

  public async one(entity: DataSet): Promise<DataSetDTO> {

    const tables = entity.tables
      ? await this.tableMap.many(entity.tables)
      : [];

    return {
      dataSetCode: entity.code,
      groupCode: entity.groupCode,
      displayName: entity.displayName,
      noResultsMessage: entity.noResultsMessage,
      tables,
    };
  }
}