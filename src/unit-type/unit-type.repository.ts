import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { UnitType } from '../entities/unit-type.entity';

@Injectable()
export class UnitTypeRepository extends Repository<UnitType> {
  constructor(entityManager: EntityManager) {
    super(UnitType, entityManager);
  }

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
