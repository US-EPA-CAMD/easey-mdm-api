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
    private readonly Logger: Logger,
  ) {}

  async getFuelCodes(): Promise<FuelCodeDTO[]> {
    this.Logger.info('Getting fuel codes');
    let query;
    try {
      query = await this.repository.getFuelCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got fuel codes');

    return query;
  }
}
