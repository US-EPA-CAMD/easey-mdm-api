import { QualLeeRelationships } from '../entities/vw-quallee-master-data-relationships.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(QualLeeRelationships)
export class QualLeeRelationshipsRepository extends Repository<
  QualLeeRelationships
> {
  async getQualLeeRelationships(): Promise<QualLeeRelationships[]> {
    const query = this.createQueryBuilder('qlr').select([
      'qlr.parameterCode',
      'qlr.unitsOfStandard',
      'qlr.qualificationTestType',
    ]);

    return query.getMany();
  }
}
