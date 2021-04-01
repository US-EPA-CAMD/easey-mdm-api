import { Injectable } from '@nestjs/common';

import { BaseMap } from './base.map';
import { State } from '../entities/state-code.entity';
import { StateDTO } from '../dto/state.dto';

@Injectable()
export class StateMap extends BaseMap<State, StateDTO> {
  public async one(entity: State): Promise<StateDTO> {
    return {
      stateCode: entity.stateCode,
      stateName: entity.stateName,
      domesticInd: !!+entity.domesticInd,
      indianCountryInd: !!+entity.indianCountryInd,
      epaRegion: entity.epaRegion,
    };
  }
}
