import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { DefaultPurposeCodeDTO } from 'src/dto/default-purpose-code.dto';
import { DefaultPurposeCodeRepository } from './default-purpose-code.repository';

@Injectable()
export class DefaultPurposeCodeService {
  constructor(
    @InjectRepository(DefaultPurposeCodeRepository)
    private readonly repository: DefaultPurposeCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getDefaultPurposeCodes(): Promise<DefaultPurposeCodeDTO[]> {
    this.logger.info('Getting default purpose codes');
    let query;
    try {
      query = await this.repository.getDefaultPurposeCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got default purpose codes');

    return query;
  }
}
