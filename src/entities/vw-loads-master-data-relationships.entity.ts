import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'camdecmpsmd.vw_load_master_data_relationships' })
export class LoadsRelationships {
  @ViewColumn({
    name: 'unit_of_measure_code',
  })
  maximumLoadUnitsOfMeasureCode: string;

  @ViewColumn({
    name: 'normal_level',
  })
  normalLevelCode: string;

  @ViewColumn({
    name: 'second_level',
  })
  secondLevelCode: string;
}
