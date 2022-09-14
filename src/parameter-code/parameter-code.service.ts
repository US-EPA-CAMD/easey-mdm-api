import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { ParameterCodeDTO } from '../dto/parameter-code.dto';
import { ParameterCodeRepository } from './parameter-code.repository';

@Injectable()
export class ParameterCodeService {
  constructor(
    @InjectRepository(ParameterCodeRepository)
    private readonly parameterCodeRepository: ParameterCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getParameterCodes(): Promise<ParameterCodeDTO[]> {
    this.logger.info('Getting parameter codes');
    let result;
    try {
      result = await this.parameterCodeRepository.getParameterCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Getting parameter codes');

    return result;
  }
}
