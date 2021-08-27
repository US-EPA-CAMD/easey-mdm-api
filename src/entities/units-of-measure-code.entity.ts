import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.units_of_measure_code' })
export class UnitsOfMeasureCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'uom_cd',
  })
  unitsOfMeasureCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'uom_cd_description',
  })
  unitsOfMeasureCodeDescription: string;
}
