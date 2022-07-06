import { EntityRepository, Repository } from 'typeorm';
import { GasTypeCode } from '../entities/gas-type-code.entity';

@EntityRepository(GasTypeCode)
export class GasTypeCodeRepository extends Repository<GasTypeCode> {
  async getGasTypeCodes(): Promise<GasTypeCode[]> {
    const query = this.createQueryBuilder('gtc').select([
      'gtc.gasTypeCode',
      'gtc.gasTypeDescription',
    ]);

    return query.getMany();
  }
}
