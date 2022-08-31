import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.fuel_indicator_code' })
export class FuelIndicatorCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'fuel_indicator_cd',
  })
  fuelIndicatorCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    name: 'fuel_indicator_description',
  })
  fuelIndicatorCodeDescription: string;
}
