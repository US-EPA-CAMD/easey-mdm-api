import { EntityRepository, Repository } from 'typeorm';
import { MethodsRelationships } from '../entities/vw-methods-master-data-relationships.entity';

@EntityRepository(MethodsRelationships)
export class MethodsRelationshipsRepository extends Repository<
  MethodsRelationships
> {
  async getMethodsRelationships(): Promise<MethodsRelationships[]> {
    const query = this.createQueryBuilder('mr').select([
      'mr.parameterCode',
      'mr.monitoringMethodCode',
      'mr.substituteDataCode',
      'mr.bypassApproachCode',
      // adding this comment fixes weird bug with unit test coverage
    ]);

    return query.getMany();
  }
}
