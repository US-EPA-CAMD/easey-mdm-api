import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { FuelGroup } from './fuel-group.entity';

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

  @ManyToOne(
    () => FuelGroup,
    o => o.fuelType,
  )
  @JoinColumn([
    {
      name: 'fuel_group_cd',
      referencedColumnName: 'fuelGroupCode',
    },
  ])
  fuelGroup: FuelGroup;
}
