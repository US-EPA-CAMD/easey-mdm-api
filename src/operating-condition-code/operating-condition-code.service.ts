import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { OperatingConditionCodeDTO } from '../dto/operating-condition-code.dto';
import { OperatingConditionCodeRepository } from './operating-condition-code.repository';

@Injectable()
export class OperatingConditionCodeService {
  constructor(
    @InjectRepository(OperatingConditionCodeRepository)
    private readonly repository: OperatingConditionCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getOperatingConditionCodes(): Promise<OperatingConditionCodeDTO[]> {
    this.logger.info('Getting operating condition codes');
    let query;
    try {
      query = await this.repository.getOperatingConditionCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Getting operating condition codes');

    return query;
  }
}
