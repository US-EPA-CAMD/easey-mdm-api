import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologyMap } from '../maps/control-technology.map';
import { ControlTechnologyRepository } from './control-code.repository';

@Injectable()
export class ControlTechnologiesService {
  constructor(
    @InjectRepository(ControlTechnologyRepository)
    private readonly repository: ControlTechnologyRepository,
    private readonly map: ControlTechnologyMap,
    private readonly logger: Logger,
  ) {}

  async getAllControlTechnologies(): Promise<ControlTechnologyDTO[]> {
    this.logger.info('Getting control technologies');
    let query;
    try {
      query = await this.repository.getAllControlTechnologies();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got control technologies');

    return this.map.many(query);
  }
}
