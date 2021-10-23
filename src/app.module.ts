import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { CorsOptionsModule } from '@us-epa-camd/easey-common/cors-options';

import { TypeOrmConfigService } from './config/typeorm.config';
import dbConfig from './config/db.config';
import appConfig from './config/app.config';
import routes from './routes';

import { UnitTypesModule } from './unit-types/unit-types.module';
import { ControlTechnologiesModule } from './control-technologies/control-technologies.module';
import { FuelTypesModule } from './fuel-types/fuel-types.module';
import { ProgramsModule } from './programs/programs.module';
import { AccountTypesModule } from './account-types/account-types.module';
import { StatesModule } from './states/states.module';
import { BypassApproachCodeModule } from './bypass-approach-code/bypass-approach-code.module';
import { SubDataCodeModule } from './sub-data-code/sub-data-code.module';
import { ParameterCodeModule } from './parameter-code/parameter-code.module';
import { MethodCodeModule } from './method-code/method-code.module';
import { MatsMethodCodeModule } from './mats-method-code/mats-method-code.module';
import { MatsMethodParamCodeModule } from './mats-method-param-code/mats-method-param-code.module';
import { TransactionTypesModule } from './transaction-types/transaction-types.module';
import { AnalyzerRangeCodeModule } from './analyzer-range-code/analyzer-range-code.module';
import { MaxRateSourceCodeModule } from './max-rate-source-code/max-rate-source-code.module';
import { UnitsOfMeasureCodeModule } from './units-of-measure-code/units-of-measure-code.module';
import { AcquisitionMethodCodeModule } from './acquisition-method-code/acquisition-method-code.module';
import { ComponentTypeCodeModule } from './component-type-code/component-type-code.module';
import { SystemDesignationCodeModule } from './system-designation-code/system-designation-code.module';
import { SystemTypeCodeModule } from './system-type-code/system-type-code.module';
import { BasisCodeModule } from './basis-code/basis-code.module';
import { SourceCategoriesModule } from './source-categories/source-categories.module';
import { SpanScaleCodeModule } from './span-scale-code/span-scale-code.module';
import { SpanMethodCodeModule } from './span-method-code/span-method-code.module';
import { OperatingConditionCodeModule } from './operating-condition-code/operating-condition-code.module';
import { DefaultSourceCodeModule } from './default-source-code/default-source-code.module';
import { OperatingLevelCodeModule } from './operating-level-code/operating-level-code.module';
import { EquationCodeModule } from './equation-code/equation-code.module';
import { DefaultPurposeCodeModule } from './default-purpose-code/default-purpose-code.module';
import { FuelCodeModule } from './fuel-code/fuel-code.module';
import { WafMethodCodeModule } from './waf-method-code/waf-method-code.module';
import { FuelIndicatorCodeModule } from './fuel-indicator-code/fuel-indicator-code.module';
import { DemMethodCodeModule } from './dem-method-code/dem-method-code.module';
import { ControlEquipParamCodeModule } from './control-equip-param-code/control-equip-param-code.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        dbConfig,
        appConfig
      ],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    LoggerModule,
    CorsOptionsModule,
    ControlTechnologiesModule,
    FuelTypesModule,
    UnitTypesModule,
    ProgramsModule,
    AccountTypesModule,
    StatesModule,
    BypassApproachCodeModule,
    SubDataCodeModule,
    ParameterCodeModule,
    MethodCodeModule,
    MatsMethodCodeModule,
    MatsMethodParamCodeModule,
    TransactionTypesModule,
    AnalyzerRangeCodeModule,
    MaxRateSourceCodeModule,
    UnitsOfMeasureCodeModule,
    AcquisitionMethodCodeModule,
    ComponentTypeCodeModule,
    SystemDesignationCodeModule,
    SystemTypeCodeModule,
    BasisCodeModule,
    SourceCategoriesModule,
    SpanScaleCodeModule,
    SpanMethodCodeModule,
    OperatingConditionCodeModule,
    DefaultSourceCodeModule,
    OperatingLevelCodeModule,
    EquationCodeModule,
    DefaultPurposeCodeModule,
    FuelCodeModule,
    WafMethodCodeModule,
    FuelIndicatorCodeModule,
    DemMethodCodeModule,
    ControlEquipParamCodeModule,
  ],
})
export class AppModule {}
