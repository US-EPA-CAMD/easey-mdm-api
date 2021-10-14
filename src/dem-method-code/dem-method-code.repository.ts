import { EntityRepository, Repository } from 'typeorm';
import { DemMethodCode } from '../entities/dem-method-code.entity';

@EntityRepository(DemMethodCode)
export class DemMethodCodeRepository extends Repository<DemMethodCode> {
  async getDemMethodCodes(): Promise<DemMethodCode[]> {
    const query = this.createQueryBuilder('dmc').select([
      'dmc.demMethodCode',
      'dmc.demMethodCodeDescription',
      'dmc.demParameter',
    ]);

    return query.getMany();
  }
}
