import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EaseyException } from '@us-epa-camd/easey-common/exceptions';

import { FuelTypeRepository } from './fuel-type.repository';
import { FuelTypeMap } from '../maps/fuel-type.map';
import { FuelTypeDTO } from '../dto/fuel-type.dto';

@Injectable()
export class FuelTypeService {
  constructor(
    @InjectRepository(FuelTypeRepository)
    private readonly repository: FuelTypeRepository,
    private readonly map: FuelTypeMap,
  ) {}

  async getFuelTypeCodes(): Promise<FuelTypeDTO[]> {
    try {
      const results = await this.repository.getFuelTypeCodes();
      return this.map.many(results);
    } catch (e) {
      throw new EaseyException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
