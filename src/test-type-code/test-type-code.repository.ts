import { EntityRepository, Repository } from 'typeorm';
import { TestTypeCode } from '../entities/test-type-code.entity';

@EntityRepository(TestTypeCode)
export class TestTypeCodeRepository extends Repository<TestTypeCode> {
  async getTestTypeCodes(): Promise<TestTypeCode[]> {
    return this.createQueryBuilder('ttc')
      .select()
      .getMany();
  }
}
