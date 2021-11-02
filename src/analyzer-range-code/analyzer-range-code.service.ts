import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { AnalyzerRangeCodeDTO } from '../dto/analyzer-range.dto';
import { AnalyzerRangeCodeRepository } from './analyzer-range-code.repository';

@Injectable()
export class AnalyzerRangeCodeService {
  constructor(
    @InjectRepository(AnalyzerRangeCodeRepository)
    private readonly repository: AnalyzerRangeCodeRepository,
    private Logger: Logger,
  ) {}

  async getAnalyzerRangeCodes(): Promise<AnalyzerRangeCodeDTO[]> {
    this.Logger.info('Getting analyzer range codes');
    let query;
    try {
      query = await this.repository.getAnalyzerRangeCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got analyzer range codes');
    return query;
  }
}
