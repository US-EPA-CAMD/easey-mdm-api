import { Routes } from 'nest-router';

import { FuelTypesModule } from './fuel-types/fuel-types.module';

const routes: Routes = [
  {
    path: '/fuel-types',
    module: FuelTypesModule,
  },
];

export default routes;
