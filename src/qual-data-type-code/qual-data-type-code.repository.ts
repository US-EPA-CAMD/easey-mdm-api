import { EntityRepository, Repository } from 'typeorm';
import { QualDataTypeCode } from '../entities/qual-data-type-code.entity';

@EntityRepository(QualDataTypeCode)
export class QualDataTypeCodeRepository extends Repository<QualDataTypeCode> {
  async getQualDataTypeCodes(): Promise<QualDataTypeCode[]> {
    const query = this.createQueryBuilder('qdtc').select([
      'qdtc.qualDataTypeCode',
      'qdtc.qualDataTypeCodeDescription',
    ]);

    return query.getMany();
  }
}
