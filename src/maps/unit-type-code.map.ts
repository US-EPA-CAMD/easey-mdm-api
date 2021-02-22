import { Injectable } from '@nestjs/common';

import { BaseMap } from './base.map';
import { UnitTypeCode } from '../entities/unit-type-code.entity';
import { UnitTypeCodeDTO } from '../dto/unit-type-code.dto';

@Injectable()
export class UnitTypeCodeMap extends BaseMap<UnitTypeCode, UnitTypeCodeDTO> {
  public async one(entity: UnitTypeCode): Promise<UnitTypeCodeDTO> {
    return {
      unitTypeCode: entity.unitTypeCode,
      unitTypeDescription: entity.unitTypeDescription,
      sortOrder: entity.sortOrder,
    };
  }
}
