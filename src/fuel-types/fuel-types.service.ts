import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FuelTypeRepository } from './fuel-type-code.repository';
import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelTypeDTO } from '../dto/fuel-type.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class FuelTypesService {
  constructor(
    @InjectRepository(FuelTypeRepository)
    private readonly repository: FuelTypeRepository,
    private readonly map: FuelTypeMap,
    private readonly logger: Logger,
  ) {}

  async getAllFuelTypes(): Promise<FuelTypeDTO[]> {
    this.logger.info('Getting all fuel types');
    let query;
    try {
      query = await this.repository.getAllFuelTypes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got all fuel types');

    return this.map.many(query);
  }
}
