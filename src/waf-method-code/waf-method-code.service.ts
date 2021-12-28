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
    private readonly Logger: Logger,
  ) {}

  async getWafMethodCodes(): Promise<WafMethodCodeDTO[]> {
    this.Logger.info('Getting waf method codes');
    let query;
    try {
      query = await this.repository.getWafMethodCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got waf method codes');
    return query;
  }
}
