import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.test_basis_code' })
export class TestBasisCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'test_basis_cd',
  })
  testBasisCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'test_basis_description',
  })
  testBasisCodeDescription: string;
}
