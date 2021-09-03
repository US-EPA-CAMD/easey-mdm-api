import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.system_type_code' })
export class SystemTypeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'sys_type_cd',
  })
  systemTypeCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'sys_type_description',
  })
  systemTypeCodeDescription: string;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'parameter_cd',
  })
  parameterCode: string;
}
