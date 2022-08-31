import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { RataFrequencyCode } from '../entities/rata-frequency-code.entity';
import { RataFrequencyCodeDTO } from '../dto/rata-frequency-code.dto';

@Injectable()
export class RataFrequencyCodeMap extends BaseMap<
  RataFrequencyCode,
  RataFrequencyCodeDTO
> {
  async one(entity: RataFrequencyCode): Promise<RataFrequencyCodeDTO> {
    return {
      rataFrequencyCode: entity.rataFrequencyCode,
      rataFrequencyCodeDescription: entity.rataFrequencyCodeDescription,
    };
  }
}
