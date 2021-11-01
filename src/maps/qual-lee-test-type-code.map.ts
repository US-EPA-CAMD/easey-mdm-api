import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { QualLeeTestTypeCode } from '../entities/qual-lee-test-type-code.entity';
import { QualLeeTestTypeCodeDTO } from '../dto/qual-lee-test-type-code.dto';

@Injectable()
export class QualLeeTestTypeCodeMap extends BaseMap<
  QualLeeTestTypeCode,
  QualLeeTestTypeCodeDTO
> {
  public async one(
    entity: QualLeeTestTypeCode,
  ): Promise<QualLeeTestTypeCodeDTO> {
    return {
      qualLeeTestTypeCode: entity.qualLeeTestTypeCode,
      qualLeeTestTypeDescription: entity.qualLeeTestTypeDescription,
    };
  }
}
