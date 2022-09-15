import { EntityRepository, Repository } from 'typeorm';
import { TestClaimCode } from '../entities/test-claim-code.entity';

@EntityRepository(TestClaimCode)
export class TestClaimCodeRepository extends Repository<TestClaimCode> {
  async getTestClaimCodes(): Promise<TestClaimCode[]> {
    const query = this.createQueryBuilder('tc').select([
      'tc.testClaimCode',
      'tc.testClaimCodeDescription',
    ]);

    return query.getMany();
  }
}