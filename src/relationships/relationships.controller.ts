import { Controller, Get } from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { SpansRelationshipsDTO } from '../dto/spans-relationships.dto';
import { FormulaRelationshipsDTO } from '../dto/formula-relationships.dto';
import { RelationshipsService } from './relationships.service';
import { DefaultsRelationshipsDTO } from '../dto/defaults-relationships.dto';
import { MatsMethodsRelationshipsDTO } from '../dto/mats-methods-relationships.dto';
import { MethodsRelationshipsDTO } from '../dto/methods-relationships.dto';
import { LoadsRelationshipsDTO } from '../dto/loads-relationships.dto';
import { QualLeeRelationshipsDTO } from '../dto/qual-lee-relationships.dto';
import { SystemFuelFlowRelationshipsDTO } from '../dto/sytem-fuel-flow-relationships.dto';
import { UnitControlRelationshipsDTO } from '../dto/unit-control-relationships.dto';
import { UnitFuelRelationshipsDTO } from '../dto/unit-fuel-relationships.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Relationships')
export class RelationshipsController {
  constructor(private readonly service: RelationshipsService) {}

  @Get('formulas')
  @ApiOkResponse({
    isArray: true,
    type: FormulaRelationshipsDTO,
    description: 'Retrieves all Formula Relationships Data Codes',
  })
  @ApiBadGatewayResponse({
    description: 'Invalid Request',
  })
  getFormulaRelationships() {
    return this.service.getFormulaRelationships();
  }

  @Get('spans')
  @ApiOkResponse({
    isArray: true,
    type: SpansRelationshipsDTO,
    description: 'Retrieves span master data relationships.',
  })
  @ApiBadGatewayResponse({
    description: 'Invalid Request',
  })
  getSpansRelationships(): Promise<SpansRelationshipsDTO[]> {
    return this.service.getSpansRelationships();
  }

  @Get('defaults')
  @ApiOkResponse({
    isArray: true,
    type: DefaultsRelationshipsDTO,
    description: 'Retrieves default master data relationships.',
  })
  @ApiBadGatewayResponse({
    description: 'Invalid Request',
  })
  getDefaultsRelationships(): Promise<DefaultsRelationshipsDTO[]> {
    return this.service.getDefaultsRelationships();
  }

  @Get('mats-methods')
  @ApiOkResponse({
    isArray: true,
    type: MatsMethodsRelationshipsDTO,
    description: 'Retrieves mats-methods master data relationhsips',
  })
  getMatsMethodsRelationships(): Promise<MatsMethodsRelationshipsDTO[]> {
    return this.service.getMatsMethodsRelationships();
  }

  @Get('methods')
  @ApiOkResponse({
    isArray: true,
    type: MethodsRelationshipsDTO,
    description: 'Retrieves methods master data relationhsips',
  })
  getMethodsRelationships(): Promise<MethodsRelationshipsDTO[]> {
    return this.service.getMethodsRelationships();
  }

  @Get('loads')
  @ApiOkResponse({
    isArray: true,
    type: LoadsRelationshipsDTO,
    description: 'Retrieves methods master data relationhsips',
  })
  getLoadsRelationships(): Promise<LoadsRelationshipsDTO[]> {
    return this.service.getLoadsRelationships();
  }

  @Get('lee-qualifications')
  @ApiOkResponse({
    isArray: true,
    type: QualLeeRelationshipsDTO,
    description: 'Retrieves LEE qualifications master data relationhsips',
  })
  getQualLeeRelationships(): Promise<QualLeeRelationshipsDTO[]> {
    return this.service.getQualLeeRelationships();
  }

  @Get('system-fuels')
  @ApiOkResponse({
    isArray: true,
    type: SystemFuelFlowRelationshipsDTO,
    description: 'Retrieves system fuel flow master data relationhsips',
  })
  getSystemFuelFlowRelationships(): Promise<SystemFuelFlowRelationshipsDTO[]> {
    return this.service.getSystemFuelFlowRelationships();
  }

  @Get('unit-controls')
  @ApiOkResponse({
    isArray: true,
    type: UnitControlRelationshipsDTO,
    description: 'Retrieves unit controls master data relationhsips',
  })
  getUnitControlRelationships(): Promise<UnitControlRelationshipsDTO[]> {
    return this.service.getUnitControlRelationships();
  }

  @Get('unit-fuels')
  @ApiOkResponse({
    isArray: true,
    type: UnitFuelRelationshipsDTO,
    description: 'Retrieves unit fuels master data relationhsips',
  })
  getUnitFuelRelationships(): Promise<UnitFuelRelationshipsDTO[]> {
    return this.service.getUnitFuelRelationships();
  }
}
