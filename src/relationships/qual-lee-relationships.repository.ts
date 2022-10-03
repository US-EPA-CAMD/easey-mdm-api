import { QualLeeRelationships } from '../entities/vw-quallee-master-data-relationships.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(QualLeeRelationships)
export class QualLeeRelationshipsRepository extends Repository<QualLeeRelationships> {
}
