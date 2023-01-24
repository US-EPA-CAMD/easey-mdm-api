import { Repository, EntityRepository } from 'typeorm';

import { UnitType } from '../entities/unit-type.entity';

@EntityRepository(UnitType)
export class UnitTypeRepository extends Repository<UnitType> {
  
  async getUnitTypeCodes(): Promise<UnitType[]> {
    const query = this.createQueryBuilder('ut')
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
