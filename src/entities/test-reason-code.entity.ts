import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.test_reason_code' })
export class TestReasonCode extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 7,
    name: 'test_reason_cd',
  })
  testReasonCode: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
    name: 'test_reason_cd_description',
  })
  testReasonCodeDescription: string;
}
