import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologyMap } from '../maps/control-technology.map';
import { ControlTechnologiesRepository } from './control-technologies.repository';

@Injectable()
export class ControlTechnologiesService {
  constructor(
    @InjectRepository(ControlTechnologiesRepository)
    private repository: ControlTechnologiesRepository,
    private map: ControlTechnologyMap,
  ) {}

  async getAllControlTechnologies(): Promise<ControlTechnologyDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['controlCode', 'controlDescription', 'controlEquipParamCode'],
    };

    const query = await this.repository.find(findOpts);
    return this.map.many(query);
  }
}
