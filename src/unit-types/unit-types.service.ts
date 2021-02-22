import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';

import { UnitTypeDTO } from '../dto/unit-type.dto';
import { UnitTypeMap } from '../maps/unit-type.map';
import { UnitTypesRepository } from './unit-types.repository';

@Injectable()
export class UnitTypesService {
  constructor(
    @InjectRepository(UnitTypesRepository)
    private repository: UnitTypesRepository,
    private map: UnitTypeMap,
  ) {}

  async getAllUnitTypes(): Promise<UnitTypeDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['unitTypeCode', 'unitTypeDescription', 'sortOrder'],
    };

    const query = await this.repository.find(findOpts);
    return this.map.many(query);
  }
}
