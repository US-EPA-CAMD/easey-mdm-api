import { Repository, EntityRepository } from 'typeorm';

import { UnitType } from '../entities/unit-type-code.entity';

@EntityRepository(UnitType)
export class UnitTypeRepository extends Repository<UnitType> {
  async getAllUnitTypes(): Promise<UnitType[]> {
    let query = this.createQueryBuilder('ut')
      .select([
        'ut.unitTypeCode',
        'ut.unitTypeDescription',
        'ut.unitTypeGroupCode',
        'utg.unitTypeGroupDescription',
        'ut.sortOrder',
      ])
      .innerJoin('ut.unitTypeGroup', 'utg')
      .orderBy('ut.unitTypeCode');

    return query.getMany();
  }
}
