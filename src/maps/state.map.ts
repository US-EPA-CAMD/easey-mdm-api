import { Injectable } from '@nestjs/common';

import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { State } from '../entities/state-code.entity';
import { StateDTO } from '../dto/state.dto';

@Injectable()
export class StateMap extends BaseMap<State, StateDTO> {
  public async one(entity: State): Promise<StateDTO> {
    return {
      stateCode: entity.stateCode,
      stateName: entity.stateName,
      epaRegion: entity.epaRegion,
    };
  }
}
