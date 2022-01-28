import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'camdecmpsmd.vw_span_master_data_relationships',
})
export class SpansRelationships {
  @ViewColumn({ name: 'component_type_code' })
  componentTypeCode: string;

  @ViewColumn({ name: 'unit_of_measure_code' })
  spanUnitsOfMeasureCode: string;

  @ViewColumn({ name: 'span_scale_code' })
  spanScaleCode: string;

  @ViewColumn({ name: 'span_method_code' })
  spanMethodCode: string;
}
