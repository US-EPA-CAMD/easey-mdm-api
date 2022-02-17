import { Injectable } from '@nestjs/common';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { State } from '../entities/state-code.entity';
import { StateDTO } from '../dto/state.dto';

@Injectable()
export class StateMap extends BaseMap<State, StateDTO> {
  public async one(entity: State): Promise<any> {
    return {
      [propertyMetadata.stateCode.fieldLabels.value]: entity.stateCode,
      [propertyMetadata.stateName.fieldLabels.value]: entity.stateName,
      [propertyMetadata.epaRegion.fieldLabels.value]: entity.epaRegion
        ? Number(entity.epaRegion)
        : entity.epaRegion,
    };
  }
}
