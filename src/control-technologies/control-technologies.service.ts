import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologyMap } from '../maps/control-technology.map';
import { ControlTechnologyRepository } from './control-code.repository';

@Injectable()
export class ControlTechnologiesService {
  constructor(
    @InjectRepository(ControlTechnologyRepository)
    private readonly repository: ControlTechnologyRepository,
    private readonly map: ControlTechnologyMap,
  ) {}

  async getAllControlTechnologies(): Promise<ControlTechnologyDTO[]> {
    const query = await this.repository.getAllControlTechnologies();
    return this.map.many(query);
  }
}
