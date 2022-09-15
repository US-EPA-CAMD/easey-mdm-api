import { EntityRepository, Repository } from 'typeorm';
import { TestBasisCode } from '../entities/test-basis-code.entity';

@EntityRepository(TestBasisCode)
export class TestBasisCodeRepository extends Repository<TestBasisCode> {
  async getTestBasisCodes(): Promise<TestBasisCode[]> {
    return this.createQueryBuilder('trc')
      .select()
      .getMany();
  }
}
