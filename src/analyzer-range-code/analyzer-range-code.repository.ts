import { EntityRepository, Repository } from 'typeorm';
import { AnalyzerRangeCode } from '../entities/analyzer-range.entity';

@EntityRepository(AnalyzerRangeCode)
export class AnalyzerRangeCodeRepository extends Repository<AnalyzerRangeCode> {
  async getAnalyzerRangeCodes(): Promise<AnalyzerRangeCode[]> {
    const query = await this.createQueryBuilder('arc').select([
      'arc.analyzerRangeCode',
      'arc.analyzerRangeCodeDescription',
    ]);

    return query.getMany();
  }
}
