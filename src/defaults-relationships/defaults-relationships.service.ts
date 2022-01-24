import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { DefaultsRelationshipsDTO } from '../dto/defaults-relationships.dto';
import { DefaultsRelationshipsRepository } from './defaults-relationships.repository';

@Injectable()
export class DefaultsRelationshipsService {
  constructor(
    @InjectRepository(DefaultsRelationshipsRepository)
    private readonly repository: DefaultsRelationshipsRepository,
    private readonly logger: Logger,
  ) {}

  async getDefaultsRelationships(): Promise<DefaultsRelationshipsDTO[]> {
    this.logger.info('Getting default master data relationships.');
    let query;
    try {
      query = await this.repository.getDefaultsRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got default master data relationships');
    return query;
  }
}
