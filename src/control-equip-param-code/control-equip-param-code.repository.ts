import { EntityRepository, Repository } from 'typeorm';
import { ControlEquipParam } from '../entities/control-equip-param-code.entity';

@EntityRepository(ControlEquipParam)
export class ControlEquipParamCodeRepository extends Repository<
  ControlEquipParam
> {
  async getControlEquipParamCodes(): Promise<ControlEquipParam[]> {
    const query = this.createQueryBuilder('cepc').select([
      'cepc.controlEquipParamCode',
      'cepc.controlEquipParamDescription',
    ]);

    return query.getMany();
  }
}
