import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { UnitType } from '../entities/unit-type.entity';
import { UnitTypeDTO } from '../dto/unit-type.dto';

@Injectable()
export class UnitTypeMap extends BaseMap<UnitType, UnitTypeDTO> {
  public async one(entity: UnitType): Promise<UnitTypeDTO> {
    return {
      unitTypeCode:
        entity.unitTypeCode,
      unitTypeDescription:
        entity.unitTypeDescription,
      unitTypeGroupCode:
        entity.unitTypeGroupCode,
      unitTypeGroupDescription:
        entity.unitTypeGroup?.unitTypeGroupDescription,
      sortOrder:
        entity.sortOrder,
    };
  }
}
