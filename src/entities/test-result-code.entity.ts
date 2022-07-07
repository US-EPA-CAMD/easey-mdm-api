import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'camdecmpsmd.test_result_code' })
export class TestResultCode extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', name: 'test_result_cd' })
  testResultCode: string;

  @Column({ type: 'varchar', name: 'test_result_cd_description' })
  testResultCodeDescription: string;
}
