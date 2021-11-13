import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.material_code' })
export class MaterialCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'material_cd',
  })
  materialCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'material_code_description',
  })
  materialCodeDescription: string;
}
