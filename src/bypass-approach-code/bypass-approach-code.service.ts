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
    private readonly Logger: Logger
  ) {}

  async getBypassApproachCodes(): Promise<BypassApproachCodeDTO[]> {
    this.Logger.info('Getting bypass approach codes');
    let query;
    try {
      query = await this.repository.getBypassApproachCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got bypass approach codes');

    return query;
  }
}
