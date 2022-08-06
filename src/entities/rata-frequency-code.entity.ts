import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.rata_frequency_code' })
export class RataFrequencyCode extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', name: 'rata_frequency_cd' })
  rataFrequencyCode: string;

  @Column({ type: 'varchar', name: 'rata_frequency_cd_description' })
  rataFrequencyCodeDescription: string;
}
