import { EntityRepository, Repository } from 'typeorm';

import { SubDataCode } from '../entities/sub-data-code.entity';

@EntityRepository(SubDataCode)
export class SubDataCodeRepository extends Repository<SubDataCode> {
  async getSubDataCodes(): Promise<SubDataCode[]> {
    const query = await this.createQueryBuilder('sdc').select([
      'sdc.subDataCode',
      'sdc.subDataCodeDescription',
    ]);

    return query.getMany();
  }
}
