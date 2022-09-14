import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
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
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got fuel codes');

    return query;
  }
}
