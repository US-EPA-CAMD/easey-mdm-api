import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { BypassApproachCodeDTO } from '../dto/bypass-approach-code.dto';
import { BypassApproachCodeRepository } from './bypass-approach-code.repository';

@Injectable()
export class BypassApproachCodeService {
  constructor(
    @InjectRepository(BypassApproachCodeRepository)
    private readonly repository: BypassApproachCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getBypassApproachCodes(): Promise<BypassApproachCodeDTO[]> {
    this.logger.info('Getting bypass approach codes');
    let query;
    try {
      query = await this.repository.getBypassApproachCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got bypass approach codes');

    return query;
  }
}