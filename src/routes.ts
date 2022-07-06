import { Routes } from 'nest-router';

import { ControlTechnologiesModule } from './control-technologies/control-technologies.module';
import { FuelTypesModule } from './fuel-type-code/fuel-type.module';
import { UnitTypesModule } from './unit-types/unit-types.module';
import { ProgramsModule } from './programs/programs.module';
import { AccountTypesModule } from './account-types/account-types.module';
import { StatesModule } from './states/states.module';
import { SubDataCodeModule } from './sub-data-code/sub-data-code.module';
import { BypassApproachCodeModule } from './bypass-approach-code/bypass-approach-code.module';
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
import { QualDataTypeCodeModule } from './qual-data-type-code/qual-data-type-code.module';
import { QualLeeTestTypeCodeModule } from './qual-lee-test-type-code/qual-lee-test-type-code.module';
import { QualTypeCodeModule } from './qual-type-code/qual-type-code.module';
import { MaterialCodeModule } from './material-code/material-code.module';
import { ShapeCodeModule } from './shape-code/shape-code.module';
import { RelationshipsModule } from './relationships/relationships.module';
import { TestReasonCodeModule } from './test-reason-code/test-reason-code.module';
import { TestTypeCodeModule } from './test-type-code/test-type-code.module';
import { ReportingPeriodModule } from './reporting-period/reporting-period.module';
import { GasTypeCodeModule } from './gas-type-code/gas-type-code.module';

const routes: Routes = [
  {
    path: '/control-technologies',
    module: ControlTechnologiesModule,
  },
  {
    path: '/fuel-types',
    module: FuelTypesModule,
  },
  {
    path: '/unit-types',
    module: UnitTypesModule,
  },
  {
    path: '/programs',
    module: ProgramsModule,
  },
  {
    path: '/account-types',
    module: AccountTypesModule,
  },
  {
    path: '/states',
    module: StatesModule,
  },
  {
    path: '/sub-data-codes',
    module: SubDataCodeModule,
  },
  {
    path: '/bypass-approach-codes',
    module: BypassApproachCodeModule,
  },
  {
    path: '/parameter-codes',
    module: ParameterCodeModule,
  },
  {
    path: '/method-codes',
    module: MethodCodeModule,
  },
  {
    path: '/mats-method-codes',
    module: MatsMethodCodeModule,
  },
  {
    path: '/mats-method-parameter-codes',
    module: MatsMethodParamCodeModule,
  },
  {
    path: '/transaction-types',
    module: TransactionTypesModule,
  },
  {
    path: '/analyzer-range-codes',
    module: AnalyzerRangeCodeModule,
  },
  {
    path: '/max-rate-source-codes',
    module: MaxRateSourceCodeModule,
  },
  {
    path: '/units-of-measure-codes',
    module: UnitsOfMeasureCodeModule,
  },
  {
    path: '/acquisiton-method-codes',
    module: AcquisitionMethodCodeModule,
  },
  {
    path: '/component-type-codes',
    module: ComponentTypeCodeModule,
  },
  {
    path: '/system-designation-codes',
    module: SystemDesignationCodeModule,
  },
  {
    path: '/system-type-codes',
    module: SystemTypeCodeModule,
  },
  {
    path: '/basis-codes',
    module: BasisCodeModule,
  },
  {
    path: '/source-categories',
    module: SourceCategoriesModule,
  },
  {
    path: '/span-scale-codes',
    module: SpanScaleCodeModule,
  },
  {
    path: '/span-method-codes',
    module: SpanMethodCodeModule,
  },
  {
    path: '/operating-condition-codes',
    module: OperatingConditionCodeModule,
  },
  {
    path: '/default-source-codes',
    module: DefaultSourceCodeModule,
  },
  {
    path: '/operating-level-codes',
    module: OperatingLevelCodeModule,
  },
  {
    path: '/equation-codes',
    module: EquationCodeModule,
  },
  {
    path: '/default-purpose-codes',
    module: DefaultPurposeCodeModule,
  },
  {
    path: '/fuel-codes',
    module: FuelCodeModule,
  },
  {
    path: '/waf-method-codes',
    module: WafMethodCodeModule,
  },
  {
    path: '/fuel-indicator-codes',
    module: FuelIndicatorCodeModule,
  },
  {
    path: '/dem-method-codes',
    module: DemMethodCodeModule,
  },
  {
    path: '/control-equip-param-codes',
    module: ControlEquipParamCodeModule,
  },
  {
    path: '/qual-data-type-codes',
    module: QualDataTypeCodeModule,
  },
  {
    path: '/qual-lee-test-type-codes',
    module: QualLeeTestTypeCodeModule,
  },
  {
    path: '/qual-type-codes',
    module: QualTypeCodeModule,
  },
  {
    path: '/material-codes',
    module: MaterialCodeModule,
  },
  {
    path: '/shape-codes',
    module: ShapeCodeModule,
  },
  {
    path: '/relationships',
    module: RelationshipsModule,
  },
  {
    path: '/test-reason-codes',
    module: TestReasonCodeModule,
  },
  {
    path: '/test-type-codes',
    module: TestTypeCodeModule,
  },
  {
    path: '/reporting-periods',
    module: ReportingPeriodModule,
  },
  {
    path: '/gas-type-codes',
    module: GasTypeCodeModule,
  },
];
export default routes;
