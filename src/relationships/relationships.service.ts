import {
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

import { FormulaRelationshipsDTO } from '../dto/formula-relationships.dto';
import { SpansRelationshipsDTO } from '../dto/spans-relationships.dto';
import { DefaultsRelationshipsDTO } from '../dto/defaults-relationships.dto';
import { MatsMethodsRelationshipsDTO } from '../dto/mats-methods-relationships.dto';
import { MethodsRelationshipsDTO } from '../dto/methods-relationships.dto';
import { LoadsRelationshipsDTO } from '../dto/loads-relationships.dto';
import { QualLeeRelationshipsDTO } from '../dto/qual-lee-relationships.dto';
import { SystemFuelFlowRelationshipsDTO } from '../dto/sytem-fuel-flow-relationships.dto';
import { UnitControlRelationshipsDTO } from '../dto/unit-control-relationships.dto';
import { UnitFuelRelationshipsDTO } from '../dto/unit-fuel-relationships.dto';
import { SystemComponentRelationshipsDTO } from '../dto/systems-component-relationships.dto';

import { FormulaRelationshipsRepository } from './formula-relationships.repository';
import { SpansRelationshipsRepository } from './spans-relationships.repository';
import { DefaultsRelationshipsRepository } from './defaults-relationships.repository';
import { MatsMethodsRelationshipsRepository } from './mats-methods-relationships.repository';
import { MethodsRelationshipsRepository } from './methods-relationships.repository';
import { LoadsRelationshipsRepository } from './loads-relationships.repository';
import { QualLeeRelationshipsRepository } from './qual-lee-relationships.repository';
import { SystemFuelFlowRelationshipsRepository } from './system-fuel-flow-relationships.repository';
import { UnitControlRelationshipsRepository } from './unit-control-relationships.repository';
import { UnitFuelRelationshipsRepository } from './unit-fuel-relationships.repository';
import { SystemComponentRelationshipsRepository } from './system-component-relationships.repository';
import { TestSummaryRelationshipsDTO } from '../dto/test-summary-relationships.dto';
import { TestSummaryRelationshipsRepository } from './test-summary-relationships.repository';

@Injectable()
export class RelationshipsService {
  constructor(
    private readonly fMRepository: FormulaRelationshipsRepository,
    private readonly sRRepository: SpansRelationshipsRepository,
    private readonly dRRepository: DefaultsRelationshipsRepository,
    private readonly mMRRepository: MatsMethodsRelationshipsRepository,
    private readonly mRRepository: MethodsRelationshipsRepository,
    private readonly lRRepository: LoadsRelationshipsRepository,
    private readonly qlRRepository: QualLeeRelationshipsRepository,
    private readonly sffRRepository: SystemFuelFlowRelationshipsRepository,
    private readonly ucRRepository: UnitControlRelationshipsRepository,
    private readonly ufRRepository: UnitFuelRelationshipsRepository,
    private readonly scRRepository: SystemComponentRelationshipsRepository,
    private readonly tsRRepository: TestSummaryRelationshipsRepository,
  ) {}

  async getFormulaRelationships(): Promise<FormulaRelationshipsDTO[]> {
    try {
      return await this.fMRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getSpansRelationships(): Promise<SpansRelationshipsDTO[]> {
    try {
      return await this.sRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getDefaultsRelationships(): Promise<DefaultsRelationshipsDTO[]> {
    try {
      return await this.dRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getMatsMethodsRelationships(): Promise<MatsMethodsRelationshipsDTO[]> {
    try {
      return await this.mMRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getMethodsRelationships(): Promise<MethodsRelationshipsDTO[]> {
    try {
      return await this.mRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getLoadsRelationships(): Promise<LoadsRelationshipsDTO[]> {
    try {
      return await this.lRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getQualLeeRelationships(): Promise<QualLeeRelationshipsDTO[]> {
    try {
      return await this.qlRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getSystemFuelFlowRelationships(): Promise<
    SystemFuelFlowRelationshipsDTO[]
  > {
    try {
      return await this.sffRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getUnitControlRelationships(): Promise<UnitControlRelationshipsDTO[]> {
    try {
      return await this.ucRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getUnitFuelRelationships(): Promise<UnitFuelRelationshipsDTO[]> {
    try {
      return await this.ufRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getSystemComponentRelationships(): Promise<
    SystemComponentRelationshipsDTO[]
  > {
    try {
      return await this.scRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getTestSummaryRelationships(): Promise<TestSummaryRelationshipsDTO[]> {
    try {
      return await this.tsRRepository.find();
    } catch (e) {
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
