import { EntityRepository, Repository } from 'typeorm';
import { SpanScaleCode } from '../entities/span-scale-code.entity';

@EntityRepository(SpanScaleCode)
export class SpanScaleCodeRepository extends Repository<SpanScaleCode> {
  async getSpanScaleCodes(): Promise<SpanScaleCode[]> {
    const query = this.createQueryBuilder('scc').select([
      'scc.spanScaleCode',
      'scc.spanScaleCodeDescription',
    ]);

    return query.getMany();
  }
}
