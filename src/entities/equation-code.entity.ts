import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.equation_code' })
export class EquationCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'equation_cd',
  })
  equationCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'equation_cd_description',
  })
  equationCodeDescription: string;

  @Column({
    type: 'numeric',
    precision: 38,
    scale: 0,
    name: 'moisture_ind',
  })
  moistureIndicator: number;
}
