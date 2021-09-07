import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemDesignationCodeRepository } from './system-designation-code.repository';
import { SystemDesignationCodeDTO } from '../dto/system-designation-code.dto';

@Injectable()
export class SystemDesignationCodeService {
  constructor(
    @InjectRepository(SystemDesignationCodeRepository)
    private readonly repository: SystemDesignationCodeRepository,
  ) {}

  async getSystemDesignationCodes(): Promise<SystemDesignationCodeDTO[]> {
    return this.repository.getSystemDesignationCodes();
  }
}
