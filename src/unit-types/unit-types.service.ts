import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { UnitTypeDTO } from '../dto/unit-type.dto';
import { UnitTypeMap } from '../maps/unit-type.map';
import { UnitTypeRepository } from './unit-type-code.repository';

@Injectable()
export class UnitTypesService {
  constructor(
    @InjectRepository(UnitTypeRepository)
    private readonly repository: UnitTypeRepository,
    private readonly map: UnitTypeMap,
    private readonly logger: Logger,
  ) {}

  async getAllUnitTypes(): Promise<UnitTypeDTO[]> {
    this.logger.info('Getting system type codes');
    let query;
    try {
      query = await this.repository.getAllUnitTypes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got system type codes');

    return this.map.many(query);
  }
}
