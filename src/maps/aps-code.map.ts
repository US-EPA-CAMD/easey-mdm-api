import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { ApsCodeDTO } from '../dto/aps-code.dto';
import { ApsCode } from '../entities/aps-code.entity';

@Injectable()
export class ApsCodeMap extends BaseMap<ApsCode, ApsCodeDTO> {
  async one(entity: ApsCode): Promise<ApsCodeDTO> {
    return {
      apsCode: entity.apsCode,
      apsCodeDescription: entity.apsCodeDescription,
    };
  }
}
