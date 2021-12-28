import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QualDataTypeCodeRepository } from './qual-data-type-code.repository';
import { QualDataTypeCodeDTO } from '../dto/qual-data-type-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class QualDataTypeCodeService {
  constructor(
    @InjectRepository(QualDataTypeCodeRepository)
    private readonly repository: QualDataTypeCodeRepository,
    private readonly Logger: Logger
  ) {}

  async getQualDataTypeCodes(): Promise<QualDataTypeCodeDTO[]> {

    this.Logger.info('Getting qual data type codes');
    let query;
    try {
      query = await this.repository.getQualDataTypeCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got qual data type codes');

    return query;
  }
}
