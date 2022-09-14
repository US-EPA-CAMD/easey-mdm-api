import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QualDataTypeCodeRepository } from './qual-data-type-code.repository';
import { QualDataTypeCodeDTO } from '../dto/qual-data-type-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

@Injectable()
export class QualDataTypeCodeService {
  constructor(
    @InjectRepository(QualDataTypeCodeRepository)
    private readonly repository: QualDataTypeCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getQualDataTypeCodes(): Promise<QualDataTypeCodeDTO[]> {
    this.logger.info('Getting qual data type codes');
    let query;
    try {
      query = await this.repository.getQualDataTypeCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got qual data type codes');

    return query;
  }
}
