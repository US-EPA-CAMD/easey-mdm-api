import { EntityRepository, Repository } from 'typeorm';
import { MaxRateSourceCode } from '../entities/max-rate-source-code.entity';

@EntityRepository(MaxRateSourceCode)
export class MaxRateSourceCodeRepository extends Repository<MaxRateSourceCode> {
  async getMaxRateSourceCodes(): Promise<MaxRateSourceCode[]> {
    const query = this.createQueryBuilder('mrsc').select([
      'mrsc.maxRateSourceCode',
      'mrsc.maxRateSourceCodeDescription',
    ]);

    return query.getMany();
  }
}
