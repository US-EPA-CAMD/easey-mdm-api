import { Injectable } from '@nestjs/common';

import { BaseMap } from './base.map';
import { FuelType } from '../entities/fuel-type-code.entity';
import { FuelTypeDTO } from 'src/dto/fuel-type.dto';

@Injectable()
export class FuelTypeMap extends BaseMap<FuelType, FuelTypeDTO> {
  public async one(entity: FuelType): Promise<FuelTypeDTO> {
    return {
      fuelTypeCode: entity.fuelTypeCode,
      fuelTypeDescription: entity.fuelTypeDescription,
      fuelGroupCode: entity.fuelGroupCode,
    };
  }
}
