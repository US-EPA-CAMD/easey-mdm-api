import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OperatingLevelCodeDTO } from '../dto/operating-level-code.dto';
import { OperatingLevelCodeRepository } from './operating-level-code.repository';

@Injectable()
export class OperatingLevelCodeService {
  constructor(
    @InjectRepository(OperatingLevelCodeRepository)
    private readonly repository: OperatingLevelCodeRepository,
  ) {}

  async getOperatingLevelCodes(): Promise<OperatingLevelCodeDTO[]> {
    return this.repository.getOperatingLevelCodes();
  }
}
