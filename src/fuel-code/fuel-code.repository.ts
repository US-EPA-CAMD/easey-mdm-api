import { EntityRepository, Repository } from 'typeorm';
import { FuelCode } from '../entities/fuel-code.entity';

@EntityRepository(FuelCode)
export class FuelCodeRepository extends Repository<FuelCode> {
  async getFuelCodes(): Promise<FuelCode[]> {
    const query = this.createQueryBuilder('fc').select([
      'fc.fuelCode',
      'fc.fuelGroupCode',
      'fc.unitFuelCode',
      'fc.fuelCodeDescription',
    ]);

    return query.getMany();
  }
}
