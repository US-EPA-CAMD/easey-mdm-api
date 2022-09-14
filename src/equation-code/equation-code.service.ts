import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { EquationCodeDTO } from '../dto/equation-code.dto';
import { EquationCodeRepository } from './equation-code.repository';

@Injectable()
export class EquationCodeService {
  constructor(
    @InjectRepository(EquationCodeRepository)
    private readonly repository: EquationCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getEquationCodes(): Promise<EquationCodeDTO[]> {
    this.logger.info('Getting equation codes');
    let query;
    try {
      query = await this.repository.getEquationCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got equation codes');
    return query;
  }
}
