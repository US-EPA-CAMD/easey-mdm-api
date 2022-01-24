import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'camdecmpswks.vw_formula_master_data_relationships' })
export class FormulaRelationships {
  @ViewColumn({
    name: 'parameterCode',
  })
  parameterCode: 'string';

  @ViewColumn({
    name: 'formulaCode',
  })
  formulaCode: 'string';
}
