import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.bypass_approach_code' })
export class BypassApproachCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'bypass_approach_cd',
  })
  bypassApproachCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'bypass_approach_cd_description',
  })
  bypassApproachCodeDescription: string;
}
