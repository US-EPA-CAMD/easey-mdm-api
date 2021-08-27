import { EntityRepository, Repository } from 'typeorm';
import { SystemFuelFlowUOMCode } from '../entities/system-fuel-flow-uom-code.entity';

@EntityRepository(SystemFuelFlowUOMCode)
export class SystemFuelFlowUOMCodeRepository extends Repository<
  SystemFuelFlowUOMCode
> {
  async getSystemFuelFlowUOMCodes(): Promise<SystemFuelFlowUOMCode[]> {
    const query = this.createQueryBuilder('sffuomc').select([
      'sffuomc.systemFuelFlowUOMCode',
      'sffuomc.systemFuelFlowUOMCodeDescription',
    ]);

    return query.getMany();
  }
}
