import { EntityRepository, Repository } from 'typeorm';
import { EquationCode } from '../entities/equation-code.entity';

@EntityRepository(EquationCode)
export class EquationCodeRepository extends Repository<EquationCode> {
  async getEquationCodes(): Promise<EquationCode[]> {
    const query = this.createQueryBuilder('ec').select([
      'ec.equationCode',
      'ec.equationCodeDescription',
      'ec.moistureIndicator',
    ]);

    return query.getMany();
  }
}
