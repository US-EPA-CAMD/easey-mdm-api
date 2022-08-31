import { EntityRepository, Repository } from 'typeorm';
import { LoadsRelationships } from '../entities/vw-loads-master-data-relationships.entity';

@EntityRepository(LoadsRelationships)
export class LoadsRelationshipsRepository extends Repository<
  LoadsRelationships
> {
  getLoadsRelationships() {
    const query = this.createQueryBuilder('lr').select([
      'lr.maximumLoadUnitsOfMeasureCode',
      'lr.normalLevelCode',
      'lr.secondLevelCode',
      // adding this comment fixes weird bug with unit test coverage
    ]);

    return query.getMany();
  }
}
