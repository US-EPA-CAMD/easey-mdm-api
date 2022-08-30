import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RunStatusCodeDTO } from '../dto/run-status-code.dto';
import { RunStatusCodeRepository } from './run-status-code.repository';

@Injectable()
export class RunStatusCodeService {
  constructor(
    @InjectRepository(RunStatusCodeRepository)
    private readonly repository: RunStatusCodeRepository,
  ) {}

  async getRunStatusCodes(): Promise<RunStatusCodeDTO[]> {
    return this.repository.find();
  }
}
