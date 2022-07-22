import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GasLevelCodeDTO } from '../dto/gas-level-code.dto';
import { GasLevelCodeRepository } from './gas-level-code.repository';

@Injectable()
export class GasLevelCodeService {
  constructor(
    @InjectRepository(GasLevelCodeRepository)
    private readonly repository: GasLevelCodeRepository,
  ) {}

  async getGasLevelCodes(): Promise<GasLevelCodeDTO[]> {
    return this.repository.find();
  }
}
