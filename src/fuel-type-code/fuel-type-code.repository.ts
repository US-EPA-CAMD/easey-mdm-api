import { EntityRepository, Repository } from 'typeorm';

import { FuelType } from '../entities/fuel-type-code.entity';

@EntityRepository(FuelType)
export class FuelTypeRepository extends Repository<FuelType> {
  async getAllFuelTypes(): Promise<FuelType[]> {
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
