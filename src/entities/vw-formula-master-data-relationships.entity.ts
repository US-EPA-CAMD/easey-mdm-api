import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'camdecmpswks.vw_formula_master_data_relationships' })
export class FormulaRelationships {
  @ViewColumn({
    name: 'paremeter_code',
  })
  parameterCode: 'string';

  @ViewColumn({
    name: 'formula_code',
  })
  formulaCode: 'string';
}
