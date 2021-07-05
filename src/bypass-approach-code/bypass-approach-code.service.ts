import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BypassApproachCodeDTO } from '../dto/bypass-approach-code.dto';
import { BypassApproachCodeRepository } from './bypass-approach-code.repository';

@Injectable()
export class BypassApproachCodeService {
  constructor(
    @InjectRepository(BypassApproachCodeRepository)
    private readonly repository: BypassApproachCodeRepository,
  ) {}

  async getBypassApproachCodes(): Promise<BypassApproachCodeDTO[]> {
    return this.repository.getBypassApproachCodes();
  }
}
