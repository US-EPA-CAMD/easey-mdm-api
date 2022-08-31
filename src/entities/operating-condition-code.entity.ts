import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('camdecmpsmd.operating_condition_code')
export class OperatingConditionCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'operating_condition_cd',
  })
  operatingConditionCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    unique: true,
    name: 'op_condition_cd_description',
  })
  operatingConditionCodeDescription: string;
}
