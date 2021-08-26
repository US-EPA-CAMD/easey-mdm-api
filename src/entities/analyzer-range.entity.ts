import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.analyzer_range_code' })
export class AnalyzerRangeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'analyzer_range_cd',
  })
  analyzerRangeCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'analyzer_range_cd_description',
  })
  analyzerRangeCodeDescription: string;
}
