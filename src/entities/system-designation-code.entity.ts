import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.system_designation_code' })
export class SystemDesignationCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'sys_designation_cd',
  })
  systemDesignationCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'sys_designation_cd_description',
  })
  systemDesignationCodeDescription: string;
}
