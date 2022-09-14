import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { HeatInputOilDTO } from 'src/dto/heat-input-oil.dto';
import { HeatInputOilRepository } from './heat-input-oil.repository';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class HeatInputOilService {
  constructor(
    @InjectRepository(HeatInputOilRepository)
    private readonly repository: HeatInputOilRepository,
  ) {}

  async getHeatInputOils(): Promise<HeatInputOilDTO[]> {
    let query;
    try {
      query = await this.repository.getHeatInputOils();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return query;
  }
}
