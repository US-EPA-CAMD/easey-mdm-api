import { SystemFuelFlowRelationships } from '../entities/vw-system-fuel-flow-master-data-relationships.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(SystemFuelFlowRelationships)
export class SystemFuelFlowRelationshipsRepository extends Repository<
  SystemFuelFlowRelationships
> {
  async getSystemFuelFlowRelationships(): Promise<
    SystemFuelFlowRelationships[]
  > {
    const query = this.createQueryBuilder('sff').select([
      'sff.systemFuelFlowUOMCode',
      'sff.maximumFuelFlowRateSourceCode',
    ]);

    return query.getMany();
  }
}
