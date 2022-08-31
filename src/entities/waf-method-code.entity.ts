import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.waf_method_code' })
export class WafMethodCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'waf_method_cd',
  })
  wafMethodCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'waf_method_cd_description',
  })
  wafMethodCodeDescription: string;
}
