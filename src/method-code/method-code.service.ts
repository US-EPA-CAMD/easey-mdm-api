import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { MethodCodeDTO } from '../dto/method-code.dto';
import { MethodCodeRepository } from './method-code.repository';

@Injectable()
export class MethodCodeService {
  constructor(
    @InjectRepository(MethodCodeRepository)
    private readonly methodCodeRepository: MethodCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getMethodCodes(): Promise<MethodCodeDTO[]> {
    this.logger.info('Getting method codes');
    let query;
    try {
      query = await this.methodCodeRepository.getMethodCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got method codes');

    return query;
  }
}
