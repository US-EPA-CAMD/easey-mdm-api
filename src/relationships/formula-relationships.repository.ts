import { EntityRepository, Repository } from 'typeorm';
import { FormulaRelationships } from '../entities/vw-formula-master-data-relationships.entity';

@EntityRepository(FormulaRelationships)
export class FormulaRelationshipsRepository extends Repository<
  FormulaRelationships
> {
  async getFormulaRelationships(): Promise<FormulaRelationships[]> {
    const query = this.createQueryBuilder('vwfr').select([
      'vwfr.parameterCode',
      'vwfr.formulaCode',
      // adding this comment here gets the unit test coverage to 100% (?)
    ]);

    return query.getMany();
  }
}
