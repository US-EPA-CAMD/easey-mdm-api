import { EntityRepository, Repository } from 'typeorm';
import { MethodsRelationships } from '../entities/vw-methods-master-data-relationships.entity';

@EntityRepository(MethodsRelationships)
export class MethodsRelationshipsRepository extends Repository<MethodsRelationships> {
}
