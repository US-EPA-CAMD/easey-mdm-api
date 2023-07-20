import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EaseyException } from '@us-epa-camd/easey-common/exceptions';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologyMap } from '../maps/control-technology.map';
import { ControlTechnologyRepository } from './control-technology.repository';

@Injectable()
export class ControlTechnologyService {
  constructor(
    @InjectRepository(ControlTechnologyRepository)
    private readonly repository: ControlTechnologyRepository,
    private readonly map: ControlTechnologyMap,
  ) {}

  async getControlTechnologies(): Promise<ControlTechnologyDTO[]> {
    try {
      const results = await this.repository.getControlTechnologies();
      return this.map.many(results);
    } catch (e) {
      throw new EaseyException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
