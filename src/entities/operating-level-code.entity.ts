import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.operating_level_code' })
export class OperatingLevelCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'op_level_cd',
  })
  operatingLevelCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'op_level_cd_description',
  })
  operatingLevelCodeDescription: string;
}
