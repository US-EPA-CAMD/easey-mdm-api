import { Injectable } from '@nestjs/common';
import { SpanScaleCodeDTO } from '../dto/span-scale-code.dto';
import { SpanScaleCodeRepository } from './span-scale-code.repository';

@Injectable()
export class SpanScaleCodeService {
  constructor(private readonly repository: SpanScaleCodeRepository) {}

  async getSpanScaleCodes(): Promise<SpanScaleCodeDTO[]> {
    return await this.repository.getSpanScaleCodes();
  }
}
