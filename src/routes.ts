import { Routes } from "nest-router";

import { UnitTypeCodeModule } from "./unit-type-code/unit-type-code.module";

const routes: Routes = [
  {
    path: '/unit-type-code',
    module: UnitTypeCodeModule,
  },
];
export default routes;
