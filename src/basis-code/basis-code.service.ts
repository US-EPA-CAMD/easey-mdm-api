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
    private readonly Logger: Logger,
  ) {}

  async getBasisCodes(): Promise<BasisCodeDTO[]> {
    this.Logger.info('Getting basis codes');
    let query;
    try {
      query = await this.repository.getBasisCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got basis codes');
    return query;
  }
}
