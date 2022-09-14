import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { OperatingLevelCodeDTO } from '../dto/operating-level-code.dto';
import { OperatingLevelCodeRepository } from './operating-level-code.repository';

@Injectable()
export class OperatingLevelCodeService {
  constructor(
    @InjectRepository(OperatingLevelCodeRepository)
    private readonly repository: OperatingLevelCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getOperatingLevelCodes(): Promise<OperatingLevelCodeDTO[]> {
    this.logger.info('Getting operating level codes');
    let query;
    try {
      query = await this.repository.getOperatingLevelCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Getting operating level codes');

    return query;
  }
}
