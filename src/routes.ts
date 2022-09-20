import { Routes } from 'nest-router';

import { CodeTableModule } from './code-table/code-table.module';
import { AccountTypeModule } from './account-type/account-type.module';
import { ControlTechnologyModule } from './control-technology/control-technology.module';
import { FuelTypeModule } from './fuel-type/fuel-type.module';
import { ProgramModule } from './program/program.module';
import { ReportingPeriodModule } from './reporting-period/reporting-period.module';
import { UnitTypeModule } from './unit-type/unit-type.module';

const routes: Routes = [
  {
    path: '/account-types',
    module: AccountTypeModule,
  },
  {
    path: '/control-technologies',
    module: ControlTechnologyModule,
  },
  {
    path: '/fuel-types',
    module: FuelTypeModule,
  },
  {
    path: '/programs',
    module: ProgramModule,
  },
  {
    path: '/reporting-periods',
    module: ReportingPeriodModule,
  },
  {
    path: '/unit-types',
    module: UnitTypeModule,
  },
  //THIS PATH MUST ALWAYS BE LAST
  {
    path: '/',
    module: CodeTableModule,
  },
];

export default routes;
