import { EntityRepository, Repository } from 'typeorm';

import { BypassApproachCode } from '../entities/bypass-approach-code.entity';

@EntityRepository(BypassApproachCode)
export class BypassApproachCodeRepository extends Repository<
  BypassApproachCode
> {
  async getBypassApproachCodes(): Promise<BypassApproachCode[]> {
    const query = await this.createQueryBuilder('bac').select([
      'bac.bypassApproachCode',
      'bac.bypassApproachCodeDescription',
    ]);

    return query.getMany();
  }
}
