import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QualDataTypeCodeRepository } from './qual-data-type-code.repository';
import { QualDataTypeCodeDTO } from '../dto/qual-data-type-code.dto';

@Injectable()
export class QualDataTypeCodeService {
  constructor(
    @InjectRepository(QualDataTypeCodeRepository)
    private readonly repository: QualDataTypeCodeRepository,
  ) {}

  async getQualDataTypeCodes(): Promise<QualDataTypeCodeDTO[]> {
    return this.repository.getQualDataTypeCodes();
  }
}
