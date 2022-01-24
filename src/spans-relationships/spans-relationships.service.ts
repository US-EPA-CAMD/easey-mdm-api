import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { SpansRelationshipsDTO } from '../dto/spans-relationships.dto';

@Injectable()
export class SpansRelationshipsService {
  constructor(
    @InjectRepository(SpansRelationshipsRepository)
    private readonly repository: SpansRelationshipsRepository,
    private readonly logger: Logger,
  ) {}

  async getSpanRelationships(): Promise<SpansRelationshipsDTO[]> {
    this.logger.info('Getting span master data relationships.');
    let query;
    try {
      query = await this.repository.getSpansRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got span master data relationships');
    return query;
  }
}
