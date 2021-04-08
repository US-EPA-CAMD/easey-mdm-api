import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { UnitTypeGroup } from './unit-type-group-code.entity';

@Entity({ name: 'camdmd.unit_type_code' })
export class UnitType extends BaseEntity {
  @PrimaryColumn({
    name: 'unit_type_cd',
  })
  unitTypeCode: string;

  @Column({
    name: 'unit_type_description',
  })
  unitTypeDescription: string;

  @Column({
    name: 'unit_type_group_cd',
  })
  unitTypeGroupCode: string;

  @Column({
    name: 'sort_order',
  })
  sortOrder: string;

  @ManyToOne(
    () => UnitTypeGroup,
    utg => utg.unitType,
  )
  @JoinColumn([
    {
      name: 'unit_type_group_cd',
      referencedColumnName: 'unitTypeGroupCode',
    },
  ])
  unitTypeGroup: UnitTypeGroup;
}
