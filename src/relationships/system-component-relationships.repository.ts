import { EntityRepository, Repository } from 'typeorm';
import { SystemComponentRelationships } from '../entities/vw-systemcomponent-master-data-relationships.entity';

@EntityRepository(SystemComponentRelationships)
export class SystemComponentRelationshipsRepository extends Repository<SystemComponentRelationships> {
}
