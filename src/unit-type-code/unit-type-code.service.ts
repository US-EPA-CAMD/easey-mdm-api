import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';

import { UnitTypeCodeDTO } from '../dto/unit-type-code.dto';
import { UnitTypeCodeMap } from '../maps/unit-type-code.map';
import { UnitTypeCodeRepository } from './unit-type-code.repository';

@Injectable()
export class UnitTypeCodeService {
  constructor(
    @InjectRepository(UnitTypeCodeRepository)
    private repository: UnitTypeCodeRepository,
    private map: UnitTypeCodeMap,
  ) {}

  async getAllUnitTypes(): Promise<UnitTypeCodeDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['unitTypeCode', 'unitTypeDescription', 'sortOrder'],
    };

    const query = await this.repository.find(findOpts);
    return this.map.many(query);
  }
}
