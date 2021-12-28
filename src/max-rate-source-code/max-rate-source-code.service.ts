import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MaxRateSourceCodeRepository } from './max-rate-source-code.repository';
import { MaxRateSourceCodeDTO } from '../dto/max-rate-source-code.dto';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class MaxRateSourceCodeService {
  constructor(
    @InjectRepository(MaxRateSourceCodeRepository)
    private readonly repository: MaxRateSourceCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getMaxRateSourceCodes(): Promise<MaxRateSourceCodeDTO[]> {
    this.logger.info('Getting max rate source codes');
    let query;
    try {
      query = await this.repository.getMaxRateSourceCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got all max rate source codes');

    return query;
  }
}
