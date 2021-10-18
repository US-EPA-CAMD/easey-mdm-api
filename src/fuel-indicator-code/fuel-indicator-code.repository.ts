import { FuelIndicatorCode } from '../entities/fuel-indicator-code.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(FuelIndicatorCode)
export class FuelIndicatorCodeRepository extends Repository<FuelIndicatorCode> {
  async getFuelIndicatorCodes(): Promise<FuelIndicatorCode[]> {
    const query = this.createQueryBuilder('fic').select([
      'fic.fuelIndicatorCode',
      'fic.fuelIndicatorCodeDescription',
    ]);

    return query.getMany();
  }
}
