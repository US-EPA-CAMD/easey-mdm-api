import { EntityRepository, Repository } from 'typeorm';
import { UnitControlRelationships } from '../entities/vw-unitcontrol-master-data-relationships.entity';

@EntityRepository(UnitControlRelationships)
export class UnitControlRelationshipsRepository extends Repository<UnitControlRelationships> {
}
