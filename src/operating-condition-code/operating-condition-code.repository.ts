import { EntityRepository, Repository } from 'typeorm';
import { OperatingConditionCode } from '../entities/operating-condition-code.entity';

@EntityRepository(OperatingConditionCode)
export class OperatingConditionCodeRepository extends Repository<
  OperatingConditionCode
> {
  async getOperatingConditionCodes(): Promise<OperatingConditionCode[]> {
    const query = this.createQueryBuilder('occ').select([
      'occ.operatingConditionCode',
      'occ.operatingConditionCodeDescription',
    ]);

    return query.getMany();
  }
}
