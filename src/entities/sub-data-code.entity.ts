import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.substitute_data_code' })
export class SubDataCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'sub_data_cd',
  })
  subDataCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'bypass_approach_cd_description',
  })
  subDataCodeDescription: string;
}
