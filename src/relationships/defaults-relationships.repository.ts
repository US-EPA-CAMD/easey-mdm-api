import { EntityRepository, Repository } from 'typeorm';
import { DefaultsRelationships } from '../entities/vw-defaults-master-data-relationships.entity';

@EntityRepository(DefaultsRelationships)
export class DefaultsRelationshipsRepository extends Repository<DefaultsRelationships> {
}
