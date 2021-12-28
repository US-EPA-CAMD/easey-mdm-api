import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got all mat method param codes');

    return query;
  }
}
