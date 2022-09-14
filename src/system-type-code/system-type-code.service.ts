import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { SystemTypeCodeDTO } from '../dto/system-type-code.dto';
import { SystemTypeCodeRepository } from './system-type-code.repository';

@Injectable()
export class SystemTypeCodeService {
  constructor(
    @InjectRepository(SystemTypeCodeRepository)
    private readonly repository: SystemTypeCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getSystemTypeCodes(): Promise<SystemTypeCodeDTO[]> {
    this.logger.info('Getting system type codes');
    let query;
    try {
      query = await this.repository.getSystemTypeCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got system type codes');

    return query;
  }
}
