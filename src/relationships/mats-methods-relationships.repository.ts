import { EntityRepository, Repository } from 'typeorm';
import { MatsMethodsRelationships } from '../entities/vw-mats-methods-master-data-relationships.entity';

@EntityRepository(MatsMethodsRelationships)
export class MatsMethodsRelationshipsRepository extends Repository<
  MatsMethodsRelationships
> {
  async getMatsMethodsRelationships(): Promise<MatsMethodsRelationships[]> {
    const query = this.createQueryBuilder('mmr').select([
      'mmr.supplementalMATSParameterCode',
      'mmr.supplementalMATSMonitoringMethodCode',
      // adding this comment fixes weird bug with unit test coverage
    ]);

    return query.getMany();
  }
}
