import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { UnitType } from './unit-type-code.entity';

@Entity({ name: 'camdmd.unit_type_group_code' })
export class UnitTypeGroup extends BaseEntity {
  @PrimaryColumn({
    name: 'unit_type_group_cd',
  })
  unitTypeGroupCode: string;

  @Column({
    name: 'unit_type_group_description',
  })
  unitTypeGroupDescription: string;

  @OneToMany(
    () => UnitType,
    ut => ut.unitTypeGroup,
  )
  unitType: UnitType[];
}
