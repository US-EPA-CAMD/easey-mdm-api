import { EntityRepository, Repository } from 'typeorm';
import { ComponentTypeCode } from '../entities/component-type-code.entity';

@EntityRepository(ComponentTypeCode)
export class ComponentTypeCodeRepository extends Repository<ComponentTypeCode> {
  async getComponentTypeCodes(): Promise<ComponentTypeCode[]> {
    const query = this.createQueryBuilder('ctc').select([
      'ctc.componentTypeCode',
      'ctc.componentTypeCodeDescription',
      'ctc.spanIndicator',
      'ctc.parameterCode',
    ]);

    return query.getMany();
  }
}
