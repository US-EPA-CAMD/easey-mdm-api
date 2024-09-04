import { HttpStatus, Injectable } from '@nestjs/common';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

import { FuelTypeDTO } from '../dto/fuel-type.dto';
import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelTypeRepository } from './fuel-type.repository';

@Injectable()
export class FuelTypeService {
  constructor(
    private readonly repository: FuelTypeRepository,
    private readonly map: FuelTypeMap,
  ) {}

  async getFuelTypeCodes(): Promise<FuelTypeDTO[]> {
    try {
      const results = await this.repository.getFuelTypeCodes();
      return this.map.many(results);
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
