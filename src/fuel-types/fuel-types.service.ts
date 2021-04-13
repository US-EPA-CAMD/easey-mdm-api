import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FuelTypeRepository } from './fuel-type-code.repository';
import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelTypeDTO } from '../dto/fuel-type.dto';

@Injectable()
export class FuelTypesService {
  constructor(
    @InjectRepository(FuelTypeRepository)
    private readonly repository: FuelTypeRepository,
    private map: FuelTypeMap,
  ) {}

  async getAllFuelTypes(): Promise<FuelTypeDTO[]> {
    const query = await this.repository.getAllFuelTypes();
    return this.map.many(query);
  }
}
