import { Routes } from 'nest-router';

import { ControlTechnologiesModule } from './control-technologies/control-technologies.module';
import { FuelTypesModule } from './fuel-types/fuel-types.module';
import { UnitTypesModule } from './unit-types/unit-types.module';
import { ProgramsModule } from './programs/programs.module';
import { AccountTypesModule } from './account-types/account-types.module';
import { StatesModule } from './states/states.module';
import { AccountNumbersModule } from './account-numbers/account-numbers.module';

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
    path: '/account-numbers',
    module: AccountNumbersModule,
  },
];
export default routes;
