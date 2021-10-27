import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QualLeeTestTypeCodeRepository } from './qual-lee-test-type-code.repository';
import { QualLeeTestTypeCodeDTO } from '../dto/qual-lee-test-type-code.dto';

@Injectable()
export class QualLeeTestTypeCodeService {
  constructor(
    @InjectRepository(QualLeeTestTypeCodeRepository)
    private readonly repository: QualLeeTestTypeCodeRepository,
  ) {}

  async getQualLeeTestTypeCodes(): Promise<QualLeeTestTypeCodeDTO[]> {
    return this.repository.getQualLeeTestTypeCodes();
  }
}
