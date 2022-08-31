import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { FuelCodeDTO } from '../dto/fuel-code.dto';
import { FuelCodeRepository } from './fuel-code.repository';

@Injectable()
export class FuelCodeService {
  constructor(
    @InjectRepository(FuelCodeRepository)
    private readonly repository: FuelCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getFuelCodes(): Promise<FuelCodeDTO[]> {
    this.logger.info('Getting fuel codes');
    let query;
    try {
      query = await this.repository.getFuelCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got fuel codes');

    return query;
  }
}
