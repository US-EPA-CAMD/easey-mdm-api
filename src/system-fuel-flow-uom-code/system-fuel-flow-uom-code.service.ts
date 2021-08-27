import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemFuelFlowUOMCodeRepository } from './system-fuel-flow-uom-code.repository';
import { SystemFuelFlowUOMCodeDTO } from '../dto/system-fuel-flow-uom-code.dto';

@Injectable()
export class SystemFuelFlowUOMCodeService {
  constructor(
    @InjectRepository(SystemFuelFlowUOMCodeRepository)
    private readonly repository: SystemFuelFlowUOMCodeRepository,
  ) {}

  async getSystemFuelFlowUOMCodes(): Promise<SystemFuelFlowUOMCodeDTO[]> {
    return this.repository.getSystemFuelFlowUOMCodes();
  }
}
