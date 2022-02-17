import { EntityRepository, Repository } from 'typeorm';
import { SpansRelationships } from '../entities/vw-spans-master-data-relationships.entity';

@EntityRepository(SpansRelationships)
export class SpansRelationshipsRepository extends Repository<
  SpansRelationships
> {
  async getSpansRelationships(): Promise<SpansRelationships[]> {
    const query = this.createQueryBuilder('sr').select([
      'sr.componentTypeCode',
      'sr.spanScaleCode',
      'sr.spanMethodCode',
      'sr.spanUnitsOfMeasureCode',
      // adding this comment fixes weird bug with unit test coverage
    ]);

    return query.getMany();
  }
}
