import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApsCodeDTO } from '../dto/aps-code.dto';
import { ApsCodeRepository } from './aps-code.repository';

@Injectable()
export class ApsCodeService {
  constructor(
    @InjectRepository(ApsCodeRepository)
    private readonly repository: ApsCodeRepository,
  ) {}

  async getApsCodes(): Promise<ApsCodeDTO[]> {
    return this.repository.find();
  }
}
