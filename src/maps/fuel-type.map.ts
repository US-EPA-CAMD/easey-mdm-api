import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { FuelType } from '../entities/fuel-type.entity';
import { FuelTypeDTO } from '../dto/fuel-type.dto';

@Injectable()
export class FuelTypeMap extends BaseMap<FuelType, FuelTypeDTO> {
  public async one(entity: FuelType): Promise<FuelTypeDTO> {
    return {
      fuelTypeCode:
        entity.fuelTypeCode,
      fuelTypeDescription:
        entity.fuelTypeDescription,
      fuelGroupCode:
        entity.fuelGroupCode,
      fuelGroupDescription:
        entity.fuelGroup?.fuelGroupDescription,
    };
  }
}
