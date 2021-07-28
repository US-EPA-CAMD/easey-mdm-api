import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MatsMethodCodeDTO } from 'src/dto/mats-method-code.dto';
import { MatsMethodCodeRepository } from './mats-method-code.repository';

@Injectable()
export class MatsMethodCodeService {
  constructor(
    @InjectRepository(MatsMethodCodeRepository)
    private readonly repository: MatsMethodCodeRepository,
  ) {}

  async getMatsMethodCodes(): Promise<MatsMethodCodeDTO[]> {
    return await this.repository.getMatsMethodCodes();
  }
}
