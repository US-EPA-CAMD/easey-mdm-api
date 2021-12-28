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
    private readonly Logger: Logger
  ) {}

  async getMaxRateSourceCodes(): Promise<MaxRateSourceCodeDTO[]> {

    this.Logger.info('Getting max rate source codes');
    let query;
    try {
      query = await this.repository.getMaxRateSourceCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got all max rate source codes');

    return query;
  }
}
