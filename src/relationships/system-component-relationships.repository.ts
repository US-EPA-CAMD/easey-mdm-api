import { EntityRepository, Repository } from 'typeorm';
import { SystemComponentRelationships } from '../entities/vw-systemcomponent-master-data-relationships.entity';

@EntityRepository(SystemComponentRelationships)
export class SystemComponentRelationshipsRepository extends Repository<
  SystemComponentRelationships
> {
  getSystemComponentRelationships(): Promise<SystemComponentRelationships[]> {
    const query = this.createQueryBuilder('scr').select([
      'scr.componentTypeCode',
      'scr.sampleAcquisitionMethodCode',
      'scr.basisCode',
    ]);

    return query.getMany();
  }
}
