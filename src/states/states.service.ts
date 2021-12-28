import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindManyOptions } from 'typeorm';
import { StatesRepository } from './states.repository';
import { StateMap } from '../maps/state.map';
import { StateDTO } from '../dto/state.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(StatesRepository)
    private readonly stateRepository: StatesRepository,
    private readonly stateMap: StateMap,
    private readonly Logger: Logger,
  ) {}

  async getAllStates(): Promise<StateDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['stateCode', 'stateName', 'epaRegion'],
      order: { stateCode: 'ASC' },
    };

    this.Logger.info('Getting all states');
    let query;
    try {
      query = await this.stateRepository.find(findOpts);
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got span scale codes');

    return query;
  }
}
