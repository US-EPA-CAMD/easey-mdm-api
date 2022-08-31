import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WafMethodCodeRepository } from './waf-method-code.repository';
import { WafMethodCodeDTO } from '../dto/waf-method-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class WafMethodCodeService {
  constructor(
    @InjectRepository(WafMethodCodeRepository)
    private readonly repository: WafMethodCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getWafMethodCodes(): Promise<WafMethodCodeDTO[]> {
    this.logger.info('Getting waf method codes');
    let query;
    try {
      query = await this.repository.getWafMethodCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got waf method codes');
    return query;
  }
}
