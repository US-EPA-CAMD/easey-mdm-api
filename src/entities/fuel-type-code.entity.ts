import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.fuel_type_code' })
export class FuelType extends BaseEntity {
  @PrimaryColumn({
    name: 'fuel_type_cd',
  })
  fuelTypeCode: string;

  @Column({
    name: 'fuel_type_description',
  })
  fuelTypeDescription: string;

  @Column({
    name: 'fuel_group_cd',
  })
  fuelGroupCode: string;
}
