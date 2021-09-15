import { EntityRepository, Repository } from 'typeorm';
import { SpanMethodCode } from '../entities/span-method-code.entity';

@EntityRepository(SpanMethodCode)
export class SpanMethodCodeRepository extends Repository<SpanMethodCode> {
  async getSpanMethodCodes(): Promise<SpanMethodCode[]> {
    const query = this.createQueryBuilder('smc').select([
      'smc.spanMethodCode',
      'smc.spanMethodCodeDescription',
    ]);

    return query.getMany();
  }
}
