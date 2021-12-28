import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { FuelIndicatorCode } from '../entities/fuel-indicator-code.entity';
import { FuelIndicatorCodeRepository } from './fuel-indicator-code.repository';

@Injectable()
export class FuelIndicatorCodeService {
  constructor(
    private readonly repository: FuelIndicatorCodeRepository,
    private readonly Logger: Logger,
  ) {}

  async getFuelIndicatorCodes(): Promise<FuelIndicatorCode[]> {
    this.Logger.info('Getting fuel indicator codes');
    let query;
    try {
      query = await this.repository.getFuelIndicatorCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got fuel indicator codes');

    return query;
  }
}
