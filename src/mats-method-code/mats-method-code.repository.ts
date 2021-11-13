import { EntityRepository, Repository } from 'typeorm';
import { MatsMethodCode } from '../entities/mats-method-code.entity';

@EntityRepository(MatsMethodCode)
export class MatsMethodCodeRepository extends Repository<MatsMethodCode> {
  async getMatsMethodCodes(): Promise<MatsMethodCode[]> {
    const query = this.createQueryBuilder('mmc').select([
      'mmc.matsMethodCode',
      'mmc.matsMethodCodeDescription',
    ]);

    return query.getMany();
  }
}
