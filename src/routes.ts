import { Routes } from 'nest-router';

import { ControlTechnologiesModule } from './control-technologies/control-technologies.module';
import { FuelTypesModule } from './fuel-types/fuel-types.module';
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
import { MaximumFuelFlowRateCodeModule } from './maximum-fuel-flow-rate-code/maximum-fuel-flow-rate-code.module';
import { SystemFuelFlowUomCodeModule } from './system-fuel-flow-uom-code/system-fuel-flow-uom-code.module';

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
    path: '/maximum-fuel-flow-rate-code',
    module: MaximumFuelFlowRateCodeModule,
  },
  {
    path: '/system-fuel-flow-uom-code',
    module: SystemFuelFlowUomCodeModule,
  },
];
export default routes;
