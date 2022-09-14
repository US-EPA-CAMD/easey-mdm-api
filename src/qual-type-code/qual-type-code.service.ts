import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QualTypeCodeRepository } from './qual-type-code.repository';
import { QualTypeCodeDTO } from '../dto/qual-type-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

@Injectable()
export class QualTypeCodeService {
  constructor(
    @InjectRepository(QualTypeCodeRepository)
    private readonly repository: QualTypeCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getQualTypeCodes(): Promise<QualTypeCodeDTO[]> {
    this.logger.info('Getting qual type codes');
    let query;
    try {
      query = await this.repository.getQualTypeCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got qual type codes');

    return query;
  }
}
