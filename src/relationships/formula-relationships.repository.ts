import { EntityRepository, Repository } from 'typeorm';
import { FormulaRelationships } from '../entities/vw-formula-master-data-relationships.entity';

@EntityRepository(FormulaRelationships)
export class FormulaRelationshipsRepository extends Repository<FormulaRelationships> {
}
