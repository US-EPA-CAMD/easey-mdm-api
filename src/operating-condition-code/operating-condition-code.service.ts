import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OperatingConditionCodeDTO } from '../dto/operating-condition-code.dto';
import { OperatingConditionCodeRepository } from './operating-condition-code.repository';

@Injectable()
export class OperatingConditionCodeService {
  constructor(
    @InjectRepository(OperatingConditionCodeRepository)
    private readonly repository: OperatingConditionCodeRepository,
  ) {}

  async getOperatingConditionCodes(): Promise<OperatingConditionCodeDTO[]> {
    return this.repository.getOperatingConditionCodes();
  }
}
