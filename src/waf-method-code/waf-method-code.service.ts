import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WafMethodCodeRepository } from './waf-method-code.repository';
import { WafMethodCodeDTO } from '../dto/waf-method-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

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
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got waf method codes');
    return query;
  }
}
