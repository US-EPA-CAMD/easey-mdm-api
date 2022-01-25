import { EntityRepository, Repository } from 'typeorm';
import { MatsMethodsRelationships } from '../entities/vw-mats-methods-master-data-relationships.entity';

@EntityRepository(MatsMethodsRelationships)
export class MatsMethodsRelationshipsRepository extends Repository<
  MatsMethodsRelationships
> {
  async getMatsMethodsRelationships(): Promise<MatsMethodsRelationships[]> {
    const query = this.createQueryBuilder('mmr').select([
      'mmr.parameterCode',
      'mmr.methodCode',
    ]);

    return query.getMany();
  }
}
