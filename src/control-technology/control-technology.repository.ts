import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

import { ControlTechnology } from '../entities/control-technology.entity';

@Injectable()
export class ControlTechnologyRepository extends Repository<ControlTechnology> {
  constructor(entityManager: EntityManager) {
    super(ControlTechnology, entityManager);
  }

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
