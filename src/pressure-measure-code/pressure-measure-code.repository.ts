import { EntityRepository, Repository } from 'typeorm';
import { PressureMeasureCode } from '../entities/pressure-measure-code.entity';

@EntityRepository(PressureMeasureCode)
export class PressureMeasureCodeRepository extends Repository<PressureMeasureCode> {
  async getPressureMeasureCodes(): Promise<PressureMeasureCode[]> {
    return this.createQueryBuilder('trc')
      .select()
      .getMany();
  }
}
