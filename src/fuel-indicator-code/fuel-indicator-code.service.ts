import { Injectable } from '@nestjs/common';
import { FuelIndicatorCode } from '../entities/fuel-indicator-code.entity';
import { FuelIndicatorCodeRepository } from './fuel-indicator-code.repository';

@Injectable()
export class FuelIndicatorCodeService {
  constructor(private readonly repository: FuelIndicatorCodeRepository) {}

  async getFuelIndicatorCodes(): Promise<FuelIndicatorCode[]> {
    return this.repository.getFuelIndicatorCodes();
  }
}
