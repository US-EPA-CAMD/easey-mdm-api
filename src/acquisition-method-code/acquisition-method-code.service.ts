import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { AcquisitionMethodCodeRepository } from './acquisition-method-code.repository';
import { AcquisitionMethodCodeDTO } from '../dto/acquisition-method-code.dto';

@Injectable()
export class AcquisitionMethodCodeService {
  constructor(
    @InjectRepository(AcquisitionMethodCodeRepository)
    private readonly repository: AcquisitionMethodCodeRepository,
  ) {}

  async getAcquisitionMethodCodes(): Promise<AcquisitionMethodCodeDTO[]> {
    return this.repository.getAcquisitionMethodCodes();
  }
}
