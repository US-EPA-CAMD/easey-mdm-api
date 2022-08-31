import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { MaxRateSourceCode } from '../entities/max-rate-source-code.entity';
import { MaxRateSourceCodeDTO } from '../dto/max-rate-source-code.dto';

@Injectable()
export class MaxRateSourceCodeMap extends BaseMap<
  MaxRateSourceCode,
  MaxRateSourceCodeDTO
> {
  public async one(entity: MaxRateSourceCode): Promise<MaxRateSourceCodeDTO> {
    return {
      maxRateSourceCode: entity.maxRateSourceCode,
      maxRateSourceCodeDescription: entity.maxRateSourceCodeDescription,
    };
  }
}
