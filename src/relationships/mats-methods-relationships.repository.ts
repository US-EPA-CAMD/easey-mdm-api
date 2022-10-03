import { EntityRepository, Repository } from 'typeorm';
import { MatsMethodsRelationships } from '../entities/vw-mats-methods-master-data-relationships.entity';

@EntityRepository(MatsMethodsRelationships)
export class MatsMethodsRelationshipsRepository extends Repository<MatsMethodsRelationships> {
}
