import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpscalc.ae_hi_oil' })
export class HeatInputOil extends BaseEntity {
  @PrimaryColumn({
    type: 'integer',
    name: 'pk',
  })
  pk: number;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
    name: 'chk_session_id',
  })
  chkSessionId: string;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
    name: 'ae_hi_oil_id',
  })
  heatInputOilId: string;

  @Column({
    type: 'numeric',
    precision: 7,
    scale: 1,
    name: 'calc_oil_hi',
  })
  calculateOilHeatInput: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 1,
    name: 'calc_oil_mass',
  })
  calculateOilMass: number;
}
