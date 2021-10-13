import { EntityRepository, Repository } from 'typeorm';
import { WafMethodCode } from '../entities/waf-method-code.entity';

@EntityRepository(WafMethodCode)
export class WafMethodCodeRepository extends Repository<WafMethodCode> {
  async getWafMethodCodes(): Promise<WafMethodCode[]> {
    const query = this.createQueryBuilder('wmc').select([
      'wmc.wafMethodCode',
      'wmc.wafMethodCodeDescription',
    ]);

    return query.getMany();
  }
}
