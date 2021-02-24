import { Routes } from "nest-router";

import { UnitTypesModule } from "./unit-types/unit-types.module";
import { ControlTechnologiesModule } from "./control-technologies/control-technologies.module";


const routes: Routes = [
  {
    path: '/unit-types',
    module: UnitTypesModule,
  },
  {
    path: '/control-technologies',
    module: ControlTechnologiesModule,
  },
];
export default routes;
