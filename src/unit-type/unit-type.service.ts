import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EaseyException } from '@us-epa-camd/easey-common/exceptions';

import { UnitTypeDTO } from '../dto/unit-type.dto';
import { UnitTypeMap } from '../maps/unit-type.map';
import { UnitTypeRepository } from './unit-type.repository';

@Injectable()
export class UnitTypeService {
  constructor(
    @InjectRepository(UnitTypeRepository)
    private readonly repository: UnitTypeRepository,
    private readonly map: UnitTypeMap,
  ) {}

  async getUnitTypeCodes(): Promise<UnitTypeDTO[]> {
    try {
      const results = await this.repository.getUnitTypeCodes();
      return this.map.many(results);
    } catch (e) {
      throw new EaseyException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
