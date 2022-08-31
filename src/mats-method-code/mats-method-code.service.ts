import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got all mat method codes');

    return query;
  }
}
