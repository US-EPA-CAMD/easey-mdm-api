import { TestTypeGroupCode } from '../entities/test-type-group-code.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TestTypeGroupCode)
export class TestTypeGroupCodeRepository extends Repository<TestTypeGroupCode> {
  async getTestTypeGroupCodes(): Promise<TestTypeGroupCode[]> {
    return this.createQueryBuilder('ttgc')
      .select()
      .getMany();
  }
}
