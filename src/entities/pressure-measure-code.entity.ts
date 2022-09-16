import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.pressure_measure_code' })
export class PressureMeasureCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'pressure_meas_cd',
  })
  pressureMeasureCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'pressure_meas_cd_description',
  })
  pressureMeasureCodeDescription: string;
}
