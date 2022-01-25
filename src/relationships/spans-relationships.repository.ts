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
    ]);

    return query.getMany();
  }
}
