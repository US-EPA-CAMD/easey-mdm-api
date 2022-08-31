import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.qual_data_type_code' })
export class QualDataTypeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'qual_data_type_cd',
  })
  qualDataTypeCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'qual_data_type_cd_description',
  })
  qualDataTypeCodeDescription: string;
}
