import { EntityRepository, Repository } from 'typeorm';
import { UnitFuelRelationships } from '../entities/vw-unitfuel-master-data-relationships.entity';

@EntityRepository(UnitFuelRelationships)
export class UnitFuelRelationshipsRepository extends Repository<
  UnitFuelRelationships
> {
  async getUnitFuelRelationships(): Promise<UnitFuelRelationships[]> {
    const query = this.createQueryBuilder('ufr').select([
      'ufr.fuelCode',
      'ufr.indicatorCode',
      'ufr.demGCV',
      'ufr.demSO2',
    ]);

    return query.getMany();
  }
}
