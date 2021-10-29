import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QualTypeCodeRepository } from './qual-type-code.repository';
import { QualTypeCodeDTO } from '../dto/qual-type-code.dto';

@Injectable()
export class QualTypeCodeService {
  constructor(
    @InjectRepository(QualTypeCodeRepository)
    private readonly repository: QualTypeCodeRepository,
  ) {}

  async getQualTypeCodes(): Promise<QualTypeCodeDTO[]> {
    return this.repository.getQualTypeCodes();
  }
}
