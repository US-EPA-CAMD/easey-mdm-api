import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.qual_lee_test_type_code' })
export class QualLeeTestTypeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'qual_lee_test_type_cd',
  })
  qualLeeTestTypeCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    name: 'qual_lee_test_type_description',
  })
  qualLeeTestTypeDescription: string;
}
