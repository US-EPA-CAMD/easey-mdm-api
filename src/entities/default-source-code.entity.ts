import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('camdecmpsmd.default_source_code')
export class DefaultSourceCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'default_source_cd',
  })
  defaultSourceCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    unique: true,
    name: 'default_source_cd_description',
  })
  defaultSourceCodeDescription: string;
}
