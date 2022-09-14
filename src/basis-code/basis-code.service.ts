import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
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
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got basis codes');
    return query;
  }
}
