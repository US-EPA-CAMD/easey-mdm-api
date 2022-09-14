import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemDesignationCodeRepository } from './system-designation-code.repository';
import { SystemDesignationCodeDTO } from '../dto/system-designation-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

@Injectable()
export class SystemDesignationCodeService {
  constructor(
    @InjectRepository(SystemDesignationCodeRepository)
    private readonly repository: SystemDesignationCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getSystemDesignationCodes(): Promise<SystemDesignationCodeDTO[]> {
    this.logger.info('Getting system designation codes');
    let query;
    try {
      query = await this.repository.getSystemDesignationCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got system designation codes');

    return query;
  }
}
