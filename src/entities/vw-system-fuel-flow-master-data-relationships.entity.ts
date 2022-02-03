import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'camdecmpsmd.vw_systemfuel_master_data_relationships',
})
export class SystemFuelFlowRelationships {
  @ViewColumn({ name: 'unit_of_measure_code' })
  systemFuelFlowUOMCode: string;

  @ViewColumn({ name: 'max_rate_source_code' })
  maximumFuelFlowRateSourceCode: string;
}
