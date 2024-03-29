import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { ControlTechnology } from '../entities/control-technology.entity';
import { ControlTechnologyDTO } from '../dto/control-technology.dto';

@Injectable()
export class ControlTechnologyMap extends BaseMap<
  ControlTechnology,
  ControlTechnologyDTO
> {
  public async one(entity: ControlTechnology): Promise<ControlTechnologyDTO> {
    return {
      controlCode:
        entity.controlCode,
      controlDescription:
        entity.controlDescription,
      controlEquipParamCode:
        entity.controlEquipParamCode,
      controlEquipParamDescription:
        entity.controlEquipParam?.controlEquipParamDescription,
    };
  }
}
