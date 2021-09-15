import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.span_scale_code' })
export class SpanScaleCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'span_scale_cd',
  })
  spanScaleCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'span_scale_cd_description',
  })
  spanScaleCodeDescription: string;
}
