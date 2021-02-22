import { Injectable } from '@nestjs/common';

import { BaseMap } from './base.map';
import { UnitType } from '../entities/unit-type-code.entity';
import { UnitTypeDTO } from '../dto/unit-type.dto';

@Injectable()
export class UnitTypeMap extends BaseMap<UnitType, UnitTypeDTO> {
  public async one(entity: UnitType): Promise<UnitTypeDTO> {
    return {
      unitTypeCode: entity.unitTypeCode,
      unitTypeDescription: entity.unitTypeDescription,
      sortOrder: entity.sortOrder,
    };
  }
}
