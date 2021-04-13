import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindManyOptions } from 'typeorm';
import { StatesRepository } from './states.repository';
import { StateMap } from '../maps/state.map';
import { StateDTO } from '../dto/state.dto';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(StatesRepository)
    private readonly stateRepository: StatesRepository,
    private readonly stateMap: StateMap,
  ) {}

  async getAllStates(): Promise<StateDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['stateCode', 'stateName', 'epaRegion'],
      order: { stateCode: 'ASC' },
    };

    const query = await this.stateRepository.find(findOpts);
    return this.stateMap.many(query);
  }
}
