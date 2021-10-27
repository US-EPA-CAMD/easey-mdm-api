import { Injectable } from '@nestjs/common';
import { BaseMap } from './base.map';
import { QualDataTypeCode } from '../entities/qual-data-type-code.entity';
import { QualDataTypeCodeDTO } from '../dto/qual-data-type-code.dto';

@Injectable()
export class QualDataTypeCodeMap extends BaseMap<
  QualDataTypeCode,
  QualDataTypeCodeDTO
> {
  public async one(entity: QualDataTypeCode): Promise<QualDataTypeCodeDTO> {
    return {
      qualDataTypeCode: entity.qualDataTypeCode,
      qualDataTypeCodeDescription: entity.qualDataTypeCodeDescription,
    };
  }
}
