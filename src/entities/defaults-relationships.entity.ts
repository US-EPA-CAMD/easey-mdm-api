import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'camdecmpswks.vw_defaults_master_data_relationships',
})
export class DefaultsRelationships {
  @ViewColumn({ name: 'parameter_code' })
  parameterCode: string;

  @ViewColumn({ name: 'operating_condition_code' })
  operatingConditionCode: string;

  @ViewColumn({ name: 'unit_of_measure_code' })
  defaultUnitsOfMeasureCode: string;

  @ViewColumn({ name: 'purpose_code' })
  defaultPurposeCode: string;

  @ViewColumn({ name: 'fuel_code' })
  fuelCode: string;

  @ViewColumn({ name: 'source_code' })
  defaultSourceCode: string;
}
