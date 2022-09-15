import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'camdecmpsmd.vw_formula_master_data_relationships' })
export class FormulaRelationships {
  @ViewColumn({
    name: 'parameter_code',
  })
  parameterCode: 'string';

  @ViewColumn({
    name: 'formula_code',
  })
  formulaCode: 'string';
}