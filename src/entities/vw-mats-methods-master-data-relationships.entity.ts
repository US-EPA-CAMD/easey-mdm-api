import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'camdecmpswks.vw_matsmethods_master_data_relationships' })
export class MatsMethodsRelationships {
  @ViewColumn({
    name: 'parameter_code',
  })
  parameterCode: string;

  @ViewColumn({
    name: 'method_code',
  })
  methodCode: string;
}
