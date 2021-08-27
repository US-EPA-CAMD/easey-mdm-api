import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MaxRateSourceCodeRepository } from './max-rate-source-code.repository';
import { MaxRateSourceCodeDTO } from '../dto/max-rate-source-code.dto';

@Injectable()
export class MaxRateSourceCodeService {
  constructor(
    @InjectRepository(MaxRateSourceCodeRepository)
    private readonly repository: MaxRateSourceCodeRepository,
  ) {}

  async getMaxRateSourceCodes(): Promise<MaxRateSourceCodeDTO[]> {
    return this.repository.getMaxRateSourceCodes();
  }
}
