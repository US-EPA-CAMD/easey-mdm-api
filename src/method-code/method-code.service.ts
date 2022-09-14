import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got method codes');

    return query;
  }
}