import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';

import { UnitTypeDTO } from '../dto/unit-type.dto';
import { UnitTypeMap } from '../maps/unit-type.map';
import { UnitTypeRepository } from './unit-type-code.repository';

@Injectable()
export class UnitTypesService {
  constructor(
    @InjectRepository(UnitTypeRepository)
    private repository: UnitTypeRepository,
    private map: UnitTypeMap,
  ) {}

  async getAllUnitTypes(): Promise<UnitTypeDTO[]> {
    const query = await this.repository.getAllUnitTypes();
    return this.map.many(query);
  }
}
