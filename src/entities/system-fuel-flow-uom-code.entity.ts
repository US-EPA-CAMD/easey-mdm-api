import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.units_of_measure_code' })
export class SystemFuelFlowUOMCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'uom_cd',
  })
  systemFuelFlowUOMCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'uom_cd_description',
  })
  systemFuelFlowUOMCodeDescription: string;
}
