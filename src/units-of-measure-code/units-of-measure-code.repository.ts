import { EntityRepository, Repository } from 'typeorm';
import { UnitsOfMeasureCode } from '../entities/system-fuel-flow-uom-code.entity';

@EntityRepository(UnitsOfMeasureCode)
export class UnitsOfMeasureCodeRepository extends Repository<
  UnitsOfMeasureCode
> {
  async getUnitsOfMeasureCodes(): Promise<UnitsOfMeasureCode[]> {
    const query = this.createQueryBuilder('uomc').select([
      'uomc.unitsOfMeasureCode',
      'uomc.unitsOfMeasureCodeDescription',
    ]);

    return query.getMany();
  }
}
