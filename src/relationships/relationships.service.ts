import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

import { FormulaRelationshipsDTO } from '../dto/formula-relationships.dto';
import { SpansRelationshipsDTO } from '../dto/spans-relationships.dto';
import { DefaultsRelationshipsDTO } from '../dto/defaults-relationships.dto';
import { MatsMethodsRelationshipsDTO } from '../dto/mats-methods-relationships.dto';
import { MethodsRelationshipsDTO } from '../dto/methods-relationships.dto';
import { LoadsRelationshipsDTO } from '../dto/loads-relationships.dto';
import { QualLeeRelationshipsDTO } from '../dto/qual-lee-relationships.dto';
import { SystemFuelFlowRelationshipsDTO } from '../dto/sytem-fuel-flow-relationships.dto';
import { UnitControlRelationshipsDTO } from '../dto/unit-control-relationships.dto';

import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { DefaultsRelationshipsRepository } from './defaults-relationships.repository';
import { MatsMethodsRelationshipsRepository } from './mats-methods-relationships.repository';
import { MethodsRelationshipsRepository } from './methods-relationships.repository';
import { LoadsRelationshipsRepository } from './loads-relationships.repository';
import { QualLeeRelationshipsRepository } from './qual-lee-relationships.repository';
import { SystemFuelFlowRelationshipsRepository } from './system-fuel-flow-relationships.repository';
import { UnitControlRelationshipsRepository } from './unit-control-relationships.repository';
@Injectable()
export class RelationshipsService {
  constructor(
    @InjectRepository(FormulaRelationshipsRepository)
    private readonly fRRepository: FormulaRelationshipsRepository,
    private readonly sRRepository: SpansRelationshipsRepository,
    private readonly dRRepository: DefaultsRelationshipsRepository,
    private readonly mMRRepository: MatsMethodsRelationshipsRepository,
    private readonly mRRepository: MethodsRelationshipsRepository,
    private readonly lRRepository: LoadsRelationshipsRepository,
    private readonly qlRRepository: QualLeeRelationshipsRepository,
    private readonly sffRRepository: SystemFuelFlowRelationshipsRepository,
    private readonly ucRRepository: UnitControlRelationshipsRepository,
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

  async getSpansRelationships(): Promise<SpansRelationshipsDTO[]> {
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

  async getMethodsRelationships(): Promise<MethodsRelationshipsDTO[]> {
    this.logger.info('Getting methods master data relationships');
    let query;
    try {
      query = await this.mRRepository.getMethodsRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    return query;
  }

  async getLoadsRelationships(): Promise<LoadsRelationshipsDTO[]> {
    this.logger.info('Getting loads master data relationships');
    let query;
    try {
      query = await this.lRRepository.getLoadsRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    return query;
  }

  async getQualLeeRelationships(): Promise<QualLeeRelationshipsDTO[]> {
    this.logger.info('Getting LEE qualifications master data relationships');
    let query;
    try {
      query = await this.qlRRepository.getQualLeeRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    return query;
  }

  async getSystemFuelFlowRelationships(): Promise<
    SystemFuelFlowRelationshipsDTO[]
  > {
    this.logger.info('Getting system fuel flow master data relationships');
    let query;
    try {
      query = await this.sffRRepository.getSystemFuelFlowRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    return query;
  }

  async getUnitControlRelationships(): Promise<UnitControlRelationshipsDTO[]> {
    this.logger.info('Getting unit control master data relationships');
    let query;
    try {
      query = await this.ucRRepository.getUnitControlRelationships();
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }

    return query;
  }
}
