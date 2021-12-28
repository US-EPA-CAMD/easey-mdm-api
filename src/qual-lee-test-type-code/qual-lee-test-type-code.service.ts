import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QualLeeTestTypeCodeRepository } from './qual-lee-test-type-code.repository';
import { QualLeeTestTypeCodeDTO } from '../dto/qual-lee-test-type-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class QualLeeTestTypeCodeService {
  constructor(
    @InjectRepository(QualLeeTestTypeCodeRepository)
    private readonly repository: QualLeeTestTypeCodeRepository,
    private readonly Logger: Logger,
  ) {}

  async getQualLeeTestTypeCodes(): Promise<QualLeeTestTypeCodeDTO[]> {
    this.Logger.info('Getting qual lee test type codes');
    let query;
    try {
      query = await this.repository.getQualLeeTestTypeCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got qual lee test type codes');

    return query;
  }
}
