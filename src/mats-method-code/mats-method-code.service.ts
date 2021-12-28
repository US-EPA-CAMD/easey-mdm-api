import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { MatsMethodCodeDTO } from 'src/dto/mats-method-code.dto';
import { MatsMethodCodeRepository } from './mats-method-code.repository';

@Injectable()
export class MatsMethodCodeService {
  constructor(
    @InjectRepository(MatsMethodCodeRepository)
    private readonly repository: MatsMethodCodeRepository,
    private readonly Logger: Logger
  ) {}

  async getMatsMethodCodes(): Promise<MatsMethodCodeDTO[]> {

    this.Logger.info('Getting all mat method codes');
    let query;
    try {
      query = await this.repository.getMatsMethodCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got all mat method codes');

    return query;
  }
}
