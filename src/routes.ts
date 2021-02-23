import { Routes } from "nest-router";

import { FuelTypesModule } from './fuel-types/fuel-types.module';
import { UnitTypesModule } from "./unit-types/unit-types.module";

const routes: Routes = [
  {
    path: '/fuel-types',
    module: FuelTypesModule,
    path: '/unit-types',
    module: UnitTypesModule,
  },
];
export default routes;
