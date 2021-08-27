import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.max_rate_source_code' })
export class MaxRateSourceCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'max_rate_source_cd',
  })
  maxRateSourceCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'max_rate_source_cd_description',
  })
  maxRateSourceCodeDescription: string;
}
