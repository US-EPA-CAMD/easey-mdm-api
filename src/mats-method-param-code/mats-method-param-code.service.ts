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
    private readonly Logger: Logger
  ) {}

  async getMatsMethodParamCodes(): Promise<MatsMethodParamCodeDTO[]> {

    this.Logger.info('Getting all mat method param codes');
    let query;
    try {
      query = await this.repository.getMatsMethodParamCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got all mat method param codes');

    return query;
  }
}
