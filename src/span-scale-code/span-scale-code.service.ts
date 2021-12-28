import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { SpanScaleCodeDTO } from '../dto/span-scale-code.dto';
import { SpanScaleCodeRepository } from './span-scale-code.repository';

@Injectable()
export class SpanScaleCodeService {
  constructor(
    @InjectRepository(SpanScaleCodeRepository)
    private readonly repository: SpanScaleCodeRepository,
    private readonly Logger: Logger,
  ) {}

  async getSpanScaleCodes(): Promise<SpanScaleCodeDTO[]> {
    this.Logger.info('Getting span scale codes');
    let query;
    try {
      query = await this.repository.getSpanScaleCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got span scale codes');

    return query;
  }
}
