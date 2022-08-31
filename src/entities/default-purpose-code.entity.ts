import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.default_purpose_code' })
export class DefaultPurposeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'default_purpose_cd',
  })
  defaultPurposeCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'def_purpose_cd_description',
  })
  defaultPurposeCodeDescription: string;
}
