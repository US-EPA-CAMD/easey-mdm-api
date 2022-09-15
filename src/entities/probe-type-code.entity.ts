import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.probe_type_code' })
export class ProbeTypeCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'probe_type_cd',
  })
  probeTypeCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'probe_type_cd_description',
  })
  probeTypeCodeDescription: string;
}