import { EntityRepository, Repository } from 'typeorm';
import { TestReasonCode } from '../entities/test-reason-code.entity';

@EntityRepository(TestReasonCode)
export class TestReasonCodeRepository extends Repository<TestReasonCode> {
  async getTestReasonCodes(): Promise<TestReasonCode[]> {
    return this.createQueryBuilder('trc')
      .select()
      .getMany();
  }
}
