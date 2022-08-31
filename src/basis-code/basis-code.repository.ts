import { EntityRepository, Repository } from 'typeorm';
import { BasisCode } from '../entities/basis-code.entity';

@EntityRepository(BasisCode)
export class BasisCodeRepository extends Repository<BasisCode> {
  async getBasisCodes(): Promise<BasisCode[]> {
    const query = this.createQueryBuilder('bc').select([
      'bc.basisCode',
      'bc.basisCodeDescription',
      'bc.basisCategory',
    ]);

    return query.getMany();
  }
}
