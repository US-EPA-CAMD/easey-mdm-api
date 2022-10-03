import { EntityRepository, Repository } from 'typeorm';
import { UnitFuelRelationships } from '../entities/vw-unitfuel-master-data-relationships.entity';

@EntityRepository(UnitFuelRelationships)
export class UnitFuelRelationshipsRepository extends Repository<UnitFuelRelationships> {
}
