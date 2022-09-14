import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { HeatInputOilDTO } from 'src/dto/heat-input-oil.dto';
import { HeatInputOilRepository } from './heat-input-oil.repository';

@Injectable()
export class HeatInputOilService {
  constructor(
    @InjectRepository(HeatInputOilRepository)
    private readonly repository: HeatInputOilRepository,
    private readonly logger: Logger,
  ) {}

  async getHeatInputOils(): Promise<HeatInputOilDTO[]> {
    this.logger.info('Getting oil heat input info');
    let query;
    try {
      query = await this.repository.getHeatInputOils();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    this.logger.info('Got oil heat input info');

    return query;
  }
}
