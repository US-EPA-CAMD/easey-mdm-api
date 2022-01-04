import { Injectable } from '@nestjs/common';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { FuelType } from '../entities/fuel-type-code.entity';
import { FuelTypeDTO } from '../dto/fuel-type.dto';

@Injectable()
export class FuelTypeMap extends BaseMap<FuelType, FuelTypeDTO> {
  public async one(entity: FuelType): Promise<any> {
    return {
      [propertyMetadata.fuelTypeCode.fieldLabels.value]: entity.fuelTypeCode,
      [propertyMetadata.fuelTypeDescription.fieldLabels.value]:
        entity.fuelTypeDescription,
      [propertyMetadata.fuelGroupCode.fieldLabels.value]: entity.fuelGroupCode,
      [propertyMetadata.fuelGroupDescription.fieldLabels.value]:
        entity.fuelGroup.fuelGroupDescription,
    };
  }
}
