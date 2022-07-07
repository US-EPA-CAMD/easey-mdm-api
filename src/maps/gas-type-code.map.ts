import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { GasTypeCodeDTO } from 'src/dto/gas-type-code.dto';
import { GasTypeCode } from '../entities/gas-type-code.entity';

@Injectable()
export class GasTypeCodeMap extends BaseMap<GasTypeCode, GasTypeCodeDTO> {
  public async one(entity: GasTypeCode): Promise<GasTypeCodeDTO> {
    return {
      gasTypeCode: entity.gasTypeCode,
      gasTypeCodeDescription: entity.gasTypeDescription,
    };
  }
}
