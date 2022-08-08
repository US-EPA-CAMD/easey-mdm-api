import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RataFrequencyCodeDTO } from '../dto/rata-frequency-code.dto';
import { RataFrequencyCodeRepository } from './rata-frequency-code.repository';

@Injectable()
export class RataFrequencyCodeService {
  constructor(
    @InjectRepository(RataFrequencyCodeRepository)
    private readonly repository: RataFrequencyCodeRepository,
  ) {}

  async getRataFrequencyCodes(): Promise<RataFrequencyCodeDTO[]> {
    return this.repository.find();
  }
}
