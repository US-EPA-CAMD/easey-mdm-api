import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormulaRelationshipsDTO } from '../dto/formula-relationships.dto';
import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { SpansRelationshipsDTO } from '../dto/spans-relationships.dto';
import { DefaultsRelationshipsDTO } from '../dto/defaults-relationships.dto';
import { DefaultsRelationshipsRepository } from './defaults-relationships.repository';

@Injectable()
export class RelationshipsService {
  constructor(
    @InjectRepository(FormulaRelationshipsRepository)
    private readonly fRRepository: FormulaRelationshipsRepository,
    private readonly sRRepository: SpansRelationshipsRepository,
    private readonly dRRepository: DefaultsRelationshipsRepository,
    private readonly logger: Logger,
  ) {}

  async getFormulaRelationships(): Promise<FormulaRelationshipsDTO[]> {
    this.logger.info('Getting formula master data relationships.');
    try {
      return await this.fRRepository.getFormulaRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
  }

  async getSpanRelationships(): Promise<SpansRelationshipsDTO[]> {
    this.logger.info('Getting span master data relationships.');
    try {
      return await this.sRRepository.getSpansRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
  }

  async getDefaultsRelationships(): Promise<DefaultsRelationshipsDTO[]> {
    this.logger.info('Getting default master data relationships.');
    let query;
    try {
      query = await this.dRRepository.getDefaultsRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got default master data relationships');
    return query;
  }
}
