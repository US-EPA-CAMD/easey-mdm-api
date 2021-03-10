import { Routes } from 'nest-router';

import { ControlTechnologiesModule } from './control-technologies/control-technologies.module';
import { FuelTypesModule } from './fuel-types/fuel-types.module';
import { UnitTypesModule } from './unit-types/unit-types.module';
import { ProgramsModule } from './programs/programs.module';

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
];
export default routes;
