import { EntityRepository, Repository } from 'typeorm';
import { LoadsRelationships } from '../entities/vw-loads-master-data-relationships.entity';

@EntityRepository(LoadsRelationships)
export class LoadsRelationshipsRepository extends Repository<LoadsRelationships> {
}
