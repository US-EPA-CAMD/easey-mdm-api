import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FuelCodeDTO } from '../dto/fuel-code.dto';
import { FuelCodeRepository } from './fuel-code.repository';

@Injectable()
export class FuelCodeService {
  constructor(
    @InjectRepository(FuelCodeRepository)
    private readonly repository: FuelCodeRepository,
  ) {}

  async getFuelCodes(): Promise<FuelCodeDTO[]> {
    return this.repository.getFuelCodes();
  }
}
