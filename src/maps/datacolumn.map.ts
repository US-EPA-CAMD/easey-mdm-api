import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { DataColumnDTO } from '../dto/datacolumn.dto';
import { DataColumn } from '../entities/datacolumn.entity';

@Injectable()
export class DataColumnMap extends BaseMap<DataColumn, DataColumnDTO> {
  public async one(entity: DataColumn): Promise<DataColumnDTO> {
    return {
      columnOrder: entity.columnOrder,
      name: entity.name,
      alias: entity.alias,
      displayName: entity.displayName,
    };
  }
}
