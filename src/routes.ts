import { Routes } from 'nest-router';

import { ControlTechnologiesModule } from './control-technologies/control-technologies.module';
import { FuelTypesModule } from './fuel-type-code/fuel-type.module';
import { UnitTypesModule } from './unit-types/unit-types.module';
import { ProgramsModule } from './programs/programs.module';
import { AccountTypesModule } from './account-types/account-types.module';
import { StatesModule } from './states/states.module';
import { ParameterCodeModule } from './parameter-code/parameter-code.module';
import { TransactionTypesModule } from './transaction-types/transaction-types.module';
import { SourceCategoriesModule } from './source-categories/source-categories.module';
import { ControlEquipParamCodeModule } from './control-equip-param-code/control-equip-param-code.module';
import { ReportingPeriodModule } from './reporting-period/reporting-period.module';

const routes: Routes = [
  {
    path: '/account-types',
    module: AccountTypesModule,
  },
  {
    path: '/control-equip-param-codes',
    module: ControlEquipParamCodeModule,
  },
  {
    path: '/control-technologies',
    module: ControlTechnologiesModule,
  },
  {
    path: '/fuel-types',
    module: FuelTypesModule,
  },
  {
    path: '/parameter-codes',
    module: ParameterCodeModule,
  },
  {
    path: '/programs',
    module: ProgramsModule,
  },
  {
    path: '/reporting-periods',
    module: ReportingPeriodModule,
  },
  {
    path: '/source-categories',
    module: SourceCategoriesModule,
  },
  {
    path: '/states',
    module: StatesModule,
  },
  {
    path: '/transaction-types',
    module: TransactionTypesModule,
  },
  {
    path: '/unit-types',
    module: UnitTypesModule,
  },
];

export default routes;
