import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.bypass_approach_code' })
export class BypassApproachCodeEntity {
  @PrimaryColumn({
    name: 'bypass_approach_cd',
  })
  bypassApproachCode: string;

  @Column({
    name: 'bypass_approach_cd_description',
  })
  bypassApproachCodeDescription: string;
}
