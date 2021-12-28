import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { OperatingLevelCodeDTO } from '../dto/operating-level-code.dto';
import { OperatingLevelCodeRepository } from './operating-level-code.repository';

@Injectable()
export class OperatingLevelCodeService {
  constructor(
    @InjectRepository(OperatingLevelCodeRepository)
    private readonly repository: OperatingLevelCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getOperatingLevelCodes(): Promise<OperatingLevelCodeDTO[]> {
    this.logger.info('Getting operating level codes');
    let query;
    try {
      query = await this.repository.getOperatingLevelCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Getting operating level codes');

    return query;
  }
}
