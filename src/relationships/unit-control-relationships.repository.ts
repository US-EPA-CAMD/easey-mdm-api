import { EntityRepository, Repository } from 'typeorm';
import { UnitControlRelationships } from '../entities/vw-unitcontrol-master-data-relationships.entity';

@EntityRepository(UnitControlRelationships)
export class UnitControlRelationshipsRepository extends Repository<
  UnitControlRelationships
> {
  async getUnitControlRelationships(): Promise<UnitControlRelationships[]> {
    const query = this.createQueryBuilder('ucr').select([
      'ucr.controlEquipParamCode',
      'ucr.controlCode',
    ]);

    return query.getMany();
  }
}
