import { Routes } from "nest-router";

import { ControlTechnologiesModule } from "./control-technologies/control-technologies.module";
import { FuelTypesModule } from './fuel-types/fuel-types.module';
import { UnitTypesModule } from "./unit-types/unit-types.module";

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
  }
];
export default routes;
