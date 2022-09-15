import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { DefaultSourceCodeDTO } from '../dto/default-source-code.dto';
import { DefaultSourceCodeRepository } from './default-source-code.repository';

@Injectable()
export class DefaultSourceCodeService {
  constructor(
    @InjectRepository(DefaultSourceCodeRepository)
    private readonly repository: DefaultSourceCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getDefaultSourceCodes(): Promise<DefaultSourceCodeDTO[]> {
    this.logger.info('Getting default source codes');
    let query;
    try {
      query = await this.repository.getDefaultSourceCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got default source codes');

    return query;
  }
}
