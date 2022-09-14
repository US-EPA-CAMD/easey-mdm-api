import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { MatsMethodCodeDTO } from 'src/dto/mats-method-code.dto';
import { MatsMethodCodeRepository } from './mats-method-code.repository';

@Injectable()
export class MatsMethodCodeService {
  constructor(
    @InjectRepository(MatsMethodCodeRepository)
    private readonly repository: MatsMethodCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getMatsMethodCodes(): Promise<MatsMethodCodeDTO[]> {
    this.logger.info('Getting all mat method codes');
    let query;
    try {
      query = await this.repository.getMatsMethodCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got all mat method codes');

    return query;
  }
}
