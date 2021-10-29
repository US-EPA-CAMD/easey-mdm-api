import { Injectable } from '@nestjs/common';
import { BaseMap } from './base.map';
import { QualTypeCode } from '../entities/qual-type-code.entity';
import { QualTypeCodeDTO } from '../dto/qual-type-code.dto';

@Injectable()
export class QualTypeCodeMap extends BaseMap<QualTypeCode, QualTypeCodeDTO> {
  public async one(entity: QualTypeCode): Promise<QualTypeCodeDTO> {
    return {
      qualTypeCode: entity.qualTypeCode,
      qualTypeCodeDescription: entity.qualTypeCodeDescription,
    };
  }
}
