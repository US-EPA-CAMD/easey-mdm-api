import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { AnalyzerRangeCodeDTO } from '../dto/analyzer-range.dto';
import { AnalyzerRangeCodeRepository } from './analyzer-range-code.repository';

@Injectable()
export class AnalyzerRangeCodeService {
  constructor(
    @InjectRepository(AnalyzerRangeCodeRepository)
    private readonly repository: AnalyzerRangeCodeRepository,
    private readonly logger: Logger,
  ) {}

  async getAnalyzerRangeCodes(): Promise<AnalyzerRangeCodeDTO[]> {
    this.logger.info('Getting analyzer range codes');
    let query;
    try {
      query = await this.repository.getAnalyzerRangeCodes();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got analyzer range codes');
    return query;
  }
}
