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
