import { EntityRepository, Repository } from 'typeorm';
import { DefaultsRelationships } from '../entities/defaults-relationships.entity';

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
    ]);

    return query.getMany();
  }
}
