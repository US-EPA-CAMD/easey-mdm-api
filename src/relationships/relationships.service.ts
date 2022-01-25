import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { FormulaRelationshipsDTO } from '../dto/formula-relationships.dto';
import { SpansRelationshipsDTO } from '../dto/spans-relationships.dto';
import { DefaultsRelationshipsDTO } from '../dto/defaults-relationships.dto';
import { MatsMethodsRelationshipsDTO } from '../dto/mats-methods-relationships.dto';

import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { DefaultsRelationshipsRepository } from './defaults-relationships.repository';
import { MatsMethodsRelationshipsRepository } from './mats-methods-relationships.repository';
import { MatsMethodsRelationships } from 'src/entities/vw-mats-methods-master-data-relationships.entity';
@Injectable()
export class RelationshipsService {
  constructor(
    @InjectRepository(FormulaRelationshipsRepository)
    private readonly fRRepository: FormulaRelationshipsRepository,
    private readonly sRRepository: SpansRelationshipsRepository,
    private readonly dRRepository: DefaultsRelationshipsRepository,
    private readonly mMRRepository: MatsMethodsRelationshipsRepository,
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

  async getMatsMethodsRelationships(): Promise<MatsMethodsRelationshipsDTO[]> {
    this.logger.info('Getting mats-methods master data relationships');
    let query;
    try {
      query = await this.mMRRepository.getMatsMethodsRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    return query;
  }
}
