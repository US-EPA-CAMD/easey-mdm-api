import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpanMethodCodeDTO } from '../dto/span-method-code.dto';
import { SpanMethodCodeRepository } from './span-method-code.repository';

@Injectable()
export class SpanMethodCodeService {
  constructor(
    @InjectRepository(SpanMethodCodeRepository)
    private readonly repository: SpanMethodCodeRepository,
  ) {}

  async getSpanMethodCodes(): Promise<SpanMethodCodeDTO[]> {
    return await this.repository.getSpanMethodCodes();
  }
}
