import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { GasTypeCodeDTO } from '../dto/gas-type-code.dto';
import { GasTypeCodeRepository } from './gas-type-code.repository';

@Injectable()
export class GasTypeCodeService {
  constructor(
    @InjectRepository(GasTypeCodeRepository)
    private readonly repository: GasTypeCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getGasTypeCodes(): Promise<GasTypeCodeDTO[]> {
    this.logger.info('Getting gas type codes');
    let result;
    try {
      result = await this.repository.getGasTypeCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Found gas type codes');

    return result;
  }
}
