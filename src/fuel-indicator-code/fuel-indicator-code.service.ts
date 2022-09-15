import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { FuelIndicatorCode } from '../entities/fuel-indicator-code.entity';
import { FuelIndicatorCodeRepository } from './fuel-indicator-code.repository';

@Injectable()
export class FuelIndicatorCodeService {
  constructor(
    private readonly repository: FuelIndicatorCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getFuelIndicatorCodes(): Promise<FuelIndicatorCode[]> {
    this.logger.info('Getting fuel indicator codes');
    let query;
    try {
      query = await this.repository.getFuelIndicatorCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got fuel indicator codes');

    return query;
  }
}
