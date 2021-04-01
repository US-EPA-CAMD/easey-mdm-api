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
    private repository: StatesRepository,
    private map: StateMap,
  ) {}

  async getAllStates(): Promise<StateDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['stateCode', 'stateName', 'domesticInd', 'indianCountryInd', 'epaRegion'],
      order: { stateCode: 'ASC' },
    };

    const query = await this.repository.find(findOpts);
    return this.map.many(query);
  }
}
