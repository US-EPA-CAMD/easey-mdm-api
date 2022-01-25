import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'camdecmpsmd.vw_methods_master_data_relationships' })
export class MethodsRelationships {
  @ViewColumn({
    name: 'parameter_code',
  })
  parameterCode: string;

  @ViewColumn({
    name: 'method_code',
  })
  monitoringMethodCode: string;

  @ViewColumn({
    name: 'substitute_data_code',
  })
  substituteDataCode: string;

  @ViewColumn({
    name: 'bypass_approach_code',
  })
  bypassApproachCode: string;
}
