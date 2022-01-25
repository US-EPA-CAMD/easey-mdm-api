import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'camdecmpswks.vw_matsmethods_master_data_relationships' })
export class MatsMethodsRelationships {
  @ViewColumn({
    name: 'parameter_code',
  })
<<<<<<< HEAD
  supplementalMATSParameterCode: string;
=======
  parameterCode: string;
>>>>>>> 4bf20c49c65a945e10588b435676be8c1e9f47a5

  @ViewColumn({
    name: 'method_code',
  })
<<<<<<< HEAD
  supplementalMATSMonitoringMethodCode: string;
=======
  methodCode: string;
>>>>>>> 4bf20c49c65a945e10588b435676be8c1e9f47a5
}
