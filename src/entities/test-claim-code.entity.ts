import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.test_claim_code' })
export class TestClaimCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    nullable: false,
    name: 'test_claim_cd',
  })
  testClaimCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'test_claim_cd_description',
  })
  testClaimCodeDescription: string;
}