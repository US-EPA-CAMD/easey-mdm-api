import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

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
    private readonly logger: Logger,
  ) {}

  async getAllStates(): Promise<StateDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['stateCode', 'stateName', 'epaRegion'],
      order: { stateCode: 'ASC' },
    };

    this.logger.info('Getting all states');
    let query;
    try {
      query = await this.stateRepository.find(findOpts);
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got span scale codes');

    return this.stateMap.many(query);
  }
}
