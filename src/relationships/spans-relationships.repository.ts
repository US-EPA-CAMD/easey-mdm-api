import { EntityRepository, Repository } from 'typeorm';
import { SpansRelationships } from '../entities/vw-spans-master-data-relationships.entity';

@EntityRepository(SpansRelationships)
export class SpansRelationshipsRepository extends Repository<SpansRelationships> {
}
