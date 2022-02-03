import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'camdecmpsmd.vw_unitcontrol_master_data_relationships',
})
export class UnitControlRelationships {
  @ViewColumn({ name: 'parameter_code' })
  parameterCode: string;

  @ViewColumn({ name: 'control_code' })
  controlCode: string;
}
