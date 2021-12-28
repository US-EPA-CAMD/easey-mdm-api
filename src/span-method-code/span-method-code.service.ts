import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { SpanMethodCodeDTO } from '../dto/span-method-code.dto';
import { SpanMethodCodeRepository } from './span-method-code.repository';

@Injectable()
export class SpanMethodCodeService {
  constructor(
    @InjectRepository(SpanMethodCodeRepository)
    private readonly repository: SpanMethodCodeRepository,
    private readonly Logger: Logger,
  ) {}

  async getSpanMethodCodes(): Promise<SpanMethodCodeDTO[]> {
    this.Logger.info('Getting span method codes');
    let query;
    try {
      query = await this.repository.getSpanMethodCodes();
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got all source categories');

    return query;
  }
}
