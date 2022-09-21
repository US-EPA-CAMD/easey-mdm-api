import { Repository, EntityRepository } from 'typeorm';

import { ControlTechnology } from '../entities/control-technology.entity';

@EntityRepository(ControlTechnology)
export class ControlTechnologyRepository extends Repository<ControlTechnology> {
  async getControlTechnologies(): Promise<ControlTechnology[]> {
    const query = this.createQueryBuilder('ct')
      .select([
        'ct.controlCode',
        'ct.controlDescription',
        'ct.controlEquipParamCode',
        'cep.controlEquipParamDescription',
      ])
      .leftJoin('ct.controlEquipParam', 'cep')
      .orderBy('ct.controlCode');

    return query.getMany();
  }
}
