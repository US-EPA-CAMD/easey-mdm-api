import { Injectable } from '@nestjs/common';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { ControlTechnology } from '../entities/control-code.entity';
import { ControlTechnologyDTO } from '../dto/control-technology.dto';

@Injectable()
export class ControlTechnologyMap extends BaseMap<
  ControlTechnology,
  ControlTechnologyDTO
> {
  public async one(entity: ControlTechnology): Promise<any> {
    return {
      [propertyMetadata.controlCode.fieldLabels.value]: entity.controlCode,
      [propertyMetadata.controlDescription.fieldLabels.value]:
        entity.controlDescription,
      [propertyMetadata.controlEquipParamCode.fieldLabels.value]:
        entity.controlEquipParamCode,
      [propertyMetadata.controlEquipParamDescription.fieldLabels.value]:
        entity.controlEquipParam?.controlEquipParamDescription || null,
    };
  }
}
