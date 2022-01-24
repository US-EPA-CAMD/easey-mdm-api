import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormulaRelationshipsDTO } from '../dto/formula-relationships.dto';
import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { Logger } from '@us-epa-camd/easey-common/logger';

@Injectable()
export class RelationshipsService {
  constructor(
    @InjectRepository(FormulaRelationshipsRepository)
    private readonly fRRepository: FormulaRelationshipsRepository,
    private readonly logger: Logger,
  ) {}

  async getFormulaRelationships(): Promise<FormulaRelationshipsDTO[]> {
    this.logger.info('Getting all material codes');
    try {
      return await this.fRRepository.getFormulaRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
  }
}
