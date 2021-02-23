import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';

import { FuelTypesRepository } from './fuel-types.repository';
import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelTypeDTO } from '../dto/fuel-type.dto';

@Injectable()
export class FuelTypesService {
  constructor(
    @InjectRepository(FuelTypesRepository)
    private repository: FuelTypesRepository,
    private map: FuelTypeMap,
  ) {}

  async getAllFuelTypes(): Promise<FuelTypeDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['fuelTypeCode', 'fuelTypeDescription', 'fuelGroupCode'],
    };

    const query = await this.repository.find(findOpts);
    return this.map.many(query);
  }
}
