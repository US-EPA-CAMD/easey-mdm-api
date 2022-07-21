import { TestSummaryRelationships } from '../entities/vw_test_summary_master_data_relationships.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TestSummaryRelationships)
export class TestSummaryRelationshipsRepository extends Repository<
  TestSummaryRelationships
> {
  async getTestSummaryRelationships(): Promise<TestSummaryRelationships[]> {
    const query = this.createQueryBuilder('tsr').select([
      'tsr.testTypeCode',
      'tsr.testReasonCode',
      'tsr.testResultCode',
      'tsr.gasLevelCode',
    ]);

    return query.getMany();
  }
}
