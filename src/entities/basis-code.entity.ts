import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.basis_code' })
export class BasisCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'basis_cd',
  })
  basisCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'basis_cd_description',
  })
  basisCodeDescription: string;

  @Column({
    type: 'varchar',
    length: 10,
    name: 'basis_category',
  })
  basisCategory: string;
}
