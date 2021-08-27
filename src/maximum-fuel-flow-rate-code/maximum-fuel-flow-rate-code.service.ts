import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MaximumFuelFlowRateCodeRepository } from './maximum-fuel-flow-rate-code.repository';
import { MaximumFuelFlowRateCodeDTO } from '../dto/maximum-fuel-flow-rate-code.dto';

@Injectable()
export class MaximumFuelFlowRateCodeService {
  constructor(
    @InjectRepository(MaximumFuelFlowRateCodeRepository)
    private readonly repository: MaximumFuelFlowRateCodeRepository,
  ) {}

  async getMaximumFuelFlowRateCodes(): Promise<MaximumFuelFlowRateCodeDTO[]> {
    return this.repository.getMaximumFuelFlowRateCodes();
  }
}
