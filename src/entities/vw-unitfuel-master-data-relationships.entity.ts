import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'camdecmpsmd.vw_unitfuel_master_data_relationships',
})
export class UnitFuelRelationships {
  @ViewColumn({ name: 'fuel_type_cd' })
  fuelCode: string;

  @ViewColumn({ name: 'fuel_indicator_cd' })
  indicatorCode: string;

  @ViewColumn({ name: 'dem_gcv' })
  demGCV: string;

  @ViewColumn({ name: 'dem_so2' })
  demSO2: string;
}
