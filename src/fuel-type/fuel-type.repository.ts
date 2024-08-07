import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { FuelType } from '../entities/fuel-type.entity';

@Injectable()
export class FuelTypeRepository extends Repository<FuelType> {
  constructor(entityManager: EntityManager) {
    super(FuelType, entityManager);
  }

  async getFuelTypeCodes(): Promise<FuelType[]> {
    const query = this.createQueryBuilder('ft')
      .select([
        'ft.fuelTypeCode',
        'ft.fuelTypeDescription',
        'ft.fuelGroupCode',
        'fg.fuelGroupDescription',
      ])
      .innerJoin('ft.fuelGroup', 'fg')
      .orderBy('ft.fuelTypeCode');

    return query.getMany();
  }
}
