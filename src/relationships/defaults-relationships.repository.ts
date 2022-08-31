import { EntityRepository, Repository } from 'typeorm';
import { DefaultsRelationships } from '../entities/vw-defaults-master-data-relationships.entity';

@EntityRepository(DefaultsRelationships)
export class DefaultsRelationshipsRepository extends Repository<
  DefaultsRelationships
> {
  async getDefaultsRelationships(): Promise<DefaultsRelationships[]> {
    const query = this.createQueryBuilder('dr').select([
      'dr.parameterCode',
      'dr.operatingConditionCode',
      'dr.defaultUnitsOfMeasureCode',
      'dr.defaultPurposeCode',
      'dr.fuelCode',
      'dr.defaultSourceCode',
      // adding this comment fixes weird bug with unit test coverage
    ]);

    return query.getMany();
  }
}
