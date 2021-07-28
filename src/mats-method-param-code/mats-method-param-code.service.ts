import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MatsMethodParamCodeDTO } from '../dto/mats-method-param-code.dto';
import { MatsMethodParamCodeRepository } from './mats-method-param-code.repository';

@Injectable()
export class MatsMethodParamCodeService {
  constructor(
    @InjectRepository(MatsMethodParamCodeRepository)
    private readonly repository: MatsMethodParamCodeRepository,
  ) {}

  async getMatsMethodParamCodes(): Promise<MatsMethodParamCodeDTO[]> {
    return await this.repository.getMatsMethodParamCodes();
  }
}
