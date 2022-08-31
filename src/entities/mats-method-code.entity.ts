import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.mats_method_code' })
export class MatsMethodCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'mats_method_cd',
  })
  matsMethodCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'mats_method_description',
  })
  matsMethodCodeDescription: string;
}
