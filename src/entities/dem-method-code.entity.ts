import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.dem_method_code' })
export class DemMethodCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'dem_method_cd',
  })
  demMethodCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'dem_method_description',
  })
  demMethodCodeDescription: string;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'dem_parameter',
  })
  demParameter: string;
}
