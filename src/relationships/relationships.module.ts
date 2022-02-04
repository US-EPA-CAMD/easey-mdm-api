import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RelationshipsService } from './relationships.service';
import { RelationshipsController } from './relationships.controller';
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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FormulaRelationshipsRepository,
      SpansRelationshipsRepository,
      DefaultsRelationshipsRepository,
      MatsMethodsRelationshipsRepository,
      MethodsRelationshipsRepository,
      LoadsRelationshipsRepository,
      QualLeeRelationshipsRepository,
      SystemFuelFlowRelationshipsRepository,
      UnitControlRelationshipsRepository,
      UnitFuelRelationshipsRepository,
    ]),
    HttpModule,
  ],
  controllers: [RelationshipsController],
  providers: [RelationshipsService],
})
export class RelationshipsModule {}
