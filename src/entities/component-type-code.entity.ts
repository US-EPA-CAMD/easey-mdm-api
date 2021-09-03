import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.component_type_code' })
export class ComponentTypeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'component_type_cd',
  })
  componentTypeCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'component_type_cd_description',
  })
  componentTypeCodeDescription: string;

  @Column({
    type: 'numeric',
    precision: 38,
    scale: 0,
    name: 'span_indicator',
  })
  spanIndicator: number;

  @Column({
    type: 'varchar',
    length: 7,
    name: 'parameter_cd',
  })
  parameterCode: string;
}
