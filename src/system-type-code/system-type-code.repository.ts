import { EntityRepository, Repository } from 'typeorm';
import { SystemTypeCode } from '../entities/system-type-code.entity';

@EntityRepository(SystemTypeCode)
export class SystemTypeCodeRepository extends Repository<SystemTypeCode> {
  async getSystemTypeCodes(): Promise<SystemTypeCode[]> {
    const query = this.createQueryBuilder('stc').select([
      'stc.systemTypeCode',
      'stc.systemTypeCodeDescription',
      'stc.parameterCode',
    ]);

    return query.getMany();
  }
}
