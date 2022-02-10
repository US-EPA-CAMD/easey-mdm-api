import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'camdecmpsmd.vw_systemcomponent_master_data_relationships',
})
export class SystemComponentRelationships {
  @ViewColumn({
    name: 'component_type_code',
  })
  componentTypeCode: string;

  @ViewColumn({
    name: 'sample_aquisition_method_code',
  })
  sampleAcquisitionMethodCode: string;

  @ViewColumn({
    name: 'basis_code',
  })
  basisCode: string;
}
