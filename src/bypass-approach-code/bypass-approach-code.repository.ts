import { BypassApproachCode } from 'src/entities/bypass-approach-code.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(BypassApproachCode)
export class BypassApproachCodeRepository extends Repository<
  BypassApproachCode
> {
  async getAllBypassApproachCodes(): Promise<BypassApproachCode[]> {
    const query = await this.createQueryBuilder('bac').select([
      'bac.bypassApproachCode',
      'bac.bypassApproachCodeDescription'
    ])

    return query.getMany()
  }
}
