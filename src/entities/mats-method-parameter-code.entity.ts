import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.mats_method_parameter_code' })
export class MatsMethodParamCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'mats_method_parameter_cd',
  })
  matsMethodParamCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'mats_method_param_description',
  })
  matsMethodParamCodeDescription: string;
}
