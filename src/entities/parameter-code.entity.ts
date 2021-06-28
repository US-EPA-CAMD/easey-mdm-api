import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('camdecmpsmd.parameter_code')
export class ParameterCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'parameter_cd',
  })
  parameterCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    unique: true,
    name: 'parameter_cd_description',
  })
  parameterCodeDescription: string;
}
