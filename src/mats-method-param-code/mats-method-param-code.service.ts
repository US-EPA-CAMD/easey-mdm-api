import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { MatsMethodParamCodeDTO } from '../dto/mats-method-param-code.dto';
import { MatsMethodParamCodeRepository } from './mats-method-param-code.repository';

@Injectable()
export class MatsMethodParamCodeService {
  constructor(
    @InjectRepository(MatsMethodParamCodeRepository)
    private readonly repository: MatsMethodParamCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getMatsMethodParamCodes(): Promise<MatsMethodParamCodeDTO[]> {
    this.logger.info('Getting all mat method param codes');
    let query;
    try {
      query = await this.repository.getMatsMethodParamCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got all mat method param codes');

    return query;
  }
}
