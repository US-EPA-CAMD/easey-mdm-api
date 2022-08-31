import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.span_method_code' })
export class SpanMethodCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'span_method_cd',
  })
  spanMethodCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'span_method_cd_description',
  })
  spanMethodCodeDescription: string;
}
