import { Routes } from 'nest-router';

import { AccountTypeModule } from './account-type/account-type.module';
import { ControlTechnologyModule } from './control-technology/control-technology.module';
import { FuelTypeModule } from './fuel-type/fuel-type.module';
import { ProgramModule } from './program/program.module';
import { ReportingPeriodModule } from './reporting-period/reporting-period.module';
import { UnitTypeModule } from './unit-type/unit-type.module';
import { CodeTableModule } from './code-table/code-table.module';
import { RelationshipsModule } from './relationships/relationships.module';

const routes: Routes = [
  {
    path: '/account-type-codes',
    module: AccountTypeModule,
  },
  {
    path: '/control-codes',
    module: ControlTechnologyModule,
  },
  {
    path: '/fuel-type-codes',
    module: FuelTypeModule,
  },
  {
    path: '/program-codes',
    module: ProgramModule,
  },
  {
    path: '/reporting-periods',
    module: ReportingPeriodModule,
  },
  {
    path: '/unit-type-codes',
    module: UnitTypeModule,
  },
  // CODE TABLE MODULE MUST ALWAYS BE AFTER ALL OTHERS
  // EXCEPT RELATIONSHIPS IN ORDER FOR ROUTES TO PROPERLY WORK
  {
    path: '/',
    module: CodeTableModule,
  },
  {
    path: '/relationships',
    module: RelationshipsModule,
  },
];

export default routes;
