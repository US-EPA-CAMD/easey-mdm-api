import { Injectable } from '@nestjs/common';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { UnitType } from '../entities/unit-type-code.entity';
import { UnitTypeDTO } from '../dto/unit-type.dto';

@Injectable()
export class UnitTypeMap extends BaseMap<UnitType, UnitTypeDTO> {
  public async one(entity: UnitType): Promise<any> {
    return {
      [propertyMetadata.unitTypeCode.fieldLabels.value]: entity.unitTypeCode,
      [propertyMetadata.unitTypeDescription.fieldLabels.value]:
        entity.unitTypeDescription,
      [propertyMetadata.sortOrder.fieldLabels.value]: entity.sortOrder,
      [propertyMetadata.unitTypeGroupCode.fieldLabels.value]:
        entity.unitTypeGroupCode,
      [propertyMetadata.unitTypeGroupDescription.fieldLabels.value]:
        entity.unitTypeGroup.unitTypeGroupDescription,
    };
  }
}
