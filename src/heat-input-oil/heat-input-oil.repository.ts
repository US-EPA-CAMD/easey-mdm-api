import { EntityRepository, Repository } from 'typeorm';
import { HeatInputOil } from '../entities/heat-input-oil.entity';

@EntityRepository(HeatInputOil)
export class HeatInputOilRepository extends Repository<HeatInputOil> {
  async getHeatInputOils(): Promise<HeatInputOil[]> {
    return this.createQueryBuilder('trc')
      .select()
      .getMany();
  }
}
