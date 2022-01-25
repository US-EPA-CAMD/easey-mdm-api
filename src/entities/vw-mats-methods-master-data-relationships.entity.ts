import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'camdecmpsmd.vw_matsmethods_master_data_relationships' })
export class MatsMethodsRelationships {
  @ViewColumn({
    name: 'parameter_code',
  })
  supplementalMATSParameterCode: string;

  @ViewColumn({
    name: 'method_code',
  })
  supplementalMATSMonitoringMethodCode: string;
}
