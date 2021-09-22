import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.fuel_code' })
export class FuelCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'fuel_cd',
  })
  fuelCode: string;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'fuel_group_cd',
  })
  fuelGroupCode: string;

  @Column({
    type: 'varchar',
    length: 7,
    name: 'unit_fuel_cd',
  })
  unitFuelCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'fuel_cd_description',
  })
  fuelCodeDescription: string;
}
