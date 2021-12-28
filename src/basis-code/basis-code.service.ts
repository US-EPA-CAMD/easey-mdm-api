import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { BasisCodeDTO } from '../dto/basis-code.dto';
import { BasisCodeRepository } from './basis-code.repository';

@Injectable()
export class BasisCodeService {
  constructor(
    @InjectRepository(BasisCodeRepository)
    private readonly repository: BasisCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getBasisCodes(): Promise<BasisCodeDTO[]> {
    this.logger.info('Getting basis codes');
    let query;
    try {
      query = await this.repository.getBasisCodes();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got basis codes');
    return query;
  }
}
