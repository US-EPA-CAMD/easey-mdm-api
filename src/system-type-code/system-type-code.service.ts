import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemTypeCodeDTO } from '../dto/system-type-code.dto';
import { SystemTypeCodeRepository } from './system-type-code.repository';

@Injectable()
export class SystemTypeCodeService {
  constructor(
    @InjectRepository(SystemTypeCodeRepository)
    private readonly repository: SystemTypeCodeRepository,
  ) {}

  async getSystemTypeCodes(): Promise<SystemTypeCodeDTO[]> {
    return await this.repository.getSystemTypeCodes();
  }
}
