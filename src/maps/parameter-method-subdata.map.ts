import { Injectable } from '@nestjs/common';

import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { ParameterMethodSubData } from './../entities/vw-parameter-method-subdata.entity';
import { ParameterMethodSubDataDTO } from './../dto/parameter-method-subdata.dto';

@Injectable()
export class ParameterMethodSubDataMap extends BaseMap<ParameterMethodSubData, ParameterMethodSubDataDTO> {
  public async one(entity: ParameterMethodSubData): Promise<ParameterMethodSubDataDTO> {
    return {
      methodCode: entity.methodCode,
      parameterCode: entity.parameterCode,
      substituteDataCode: entity.substituteDataCode,
    };
  }
}
