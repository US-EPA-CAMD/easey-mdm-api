import { EntityRepository, Repository } from 'typeorm';
import { QualLeeTestTypeCode } from '../entities/qual-lee-test-type-code.entity';

@EntityRepository(QualLeeTestTypeCode)
export class QualLeeTestTypeCodeRepository extends Repository<
  QualLeeTestTypeCode
> {
  async getQualLeeTestTypeCodes(): Promise<QualLeeTestTypeCode[]> {
    const query = this.createQueryBuilder('qltt').select([
      'qltt.qualLeeTestTypeCode',
      'qltt.qualLeeTestTypeDescription',
    ]);

    return query.getMany();
  }
}
