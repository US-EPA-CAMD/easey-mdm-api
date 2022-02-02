import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'camdecmpsmd.vw_quallee_master_data_relationships',
})
export class QualLeeRelationships {
  @ViewColumn({ name: 'parameter_code' })
  parameterCode: string;

  @ViewColumn({ name: 'unit_of_standard_code' })
  unitsOfStandard: string;

  @ViewColumn({ name: 'qual_lee_test_type_cd' })
  qualificationTestType: string;
}
