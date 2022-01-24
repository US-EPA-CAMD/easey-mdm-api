import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormulaRelationshipsDTO } from '../dto/formula-relationships.dto';
import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { SpansRelationshipsDTO } from '../dto/spans-relationships.dto';

@Injectable()
export class RelationshipsService {
  constructor(
    @InjectRepository(FormulaRelationshipsRepository)
    private readonly fRRepository: FormulaRelationshipsRepository,
    private readonly sRRepository: SpansRelationshipsRepository,
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
}
