import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { DataTableDTO } from '../dto/datatable.dto';
import { DataTable } from '../entities/datatable.entity';
import { DataColumnMap } from './datacolumn.map';

@Injectable()
export class DataTableMap extends BaseMap<DataTable, DataTableDTO> {
  constructor(
    private readonly columnMap: DataColumnMap,
  ) {
    super();
  }

  public async one(entity: DataTable): Promise<DataTableDTO> {

    const columns = entity.columns
      ? await this.columnMap.many(entity.columns)
      : [];

    return {
      tableOrder: entity.tableOrder,
      displayName: entity.displayName,
      sqlStatement: entity.sqlStatement,
      noResultsMessage: entity.noResultsMessage,
      columns: columns,
    };
  }
}