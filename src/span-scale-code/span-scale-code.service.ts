import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpanScaleCodeDTO } from '../dto/span-scale-code.dto';
import { SpanScaleCodeRepository } from './span-scale-code.repository';

@Injectable()
export class SpanScaleCodeService {
  constructor(
    @InjectRepository(SpanScaleCodeRepository)
    private readonly repository: SpanScaleCodeRepository,
  ) {}

  async getSpanScaleCodes(): Promise<SpanScaleCodeDTO[]> {
    return this.repository.getSpanScaleCodes();
  }
}
