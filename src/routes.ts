import { Routes } from "nest-router";

import { UnitTypesModule } from "./unit-types/unit-types.module";

const routes: Routes = [
  {
    path: '/unit-types',
    module: UnitTypesModule,
  },
];
export default routes;
