import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { FuelType } from './fuel-type.entity';

@Entity({ name: 'camdecmpsmd.fuel_group_code' })
export class FuelGroup extends BaseEntity {
  @PrimaryColumn({
    name: 'fuel_group_cd',
  })
  fuelGroupCode: string;

  @Column({
    name: 'fuel_group_description',
  })
  fuelGroupDescription: string;

  @OneToMany(
    () => FuelType,
    o => o.fuelGroup,
  )
  fuelType: FuelType[];
}
