import { EntityRepository, Repository } from 'typeorm';
import { QualTypeCode } from '../entities/qual-type-code.entity';

@EntityRepository(QualTypeCode)
export class QualTypeCodeRepository extends Repository<QualTypeCode> {
  async getQualTypeCodes(): Promise<QualTypeCode[]> {
    const query = this.createQueryBuilder('qtc').select([
      'qtc.qualTypeCode',
      'qtc.qualTypeCodeDescription',
    ]);

    return query.getMany();
  }
}
