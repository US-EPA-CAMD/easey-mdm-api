import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnalyzerRangeCodeDTO } from '../dto/analyzer-range.dto';
import { AnalyzerRangeCodeRepository } from './analyzer-range-code.repository';

@Injectable()
export class AnalyzerRangeCodeService {
    constructor(
        @InjectRepository(AnalyzerRangeCodeRepository)
        private readonly repository: AnalyzerRangeCodeRepository,
      ) {}
    
      async getAnalyzerRangeCodes(): Promise<AnalyzerRangeCodeDTO[]> {
        return await this.repository.getAnalyzerRangeCodes();
      }
}
