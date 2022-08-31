import { EntityRepository, Repository } from 'typeorm';
import { OperatingLevelCode } from '../entities/operating-level-code.entity';

@EntityRepository(OperatingLevelCode)
export class OperatingLevelCodeRepository extends Repository<
  OperatingLevelCode
> {
  async getOperatingLevelCodes(): Promise<OperatingLevelCode[]> {
    const query = this.createQueryBuilder('olc').select([
      'olc.operatingLevelCode',
      'olc.operatingLevelCodeDescription',
    ]);

    return query.getMany();
  }
}
