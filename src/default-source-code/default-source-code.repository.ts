import { EntityRepository, Repository } from 'typeorm';
import { DefaultSourceCode } from '../entities/default-source-code.entity';

@EntityRepository(DefaultSourceCode)
export class DefaultSourceCodeRepository extends Repository<DefaultSourceCode> {
  async getDefaultSourceCodes(): Promise<DefaultSourceCode[]> {
    const query = this.createQueryBuilder('dsc').select([
      'dsc.defaultSourceCode',
      'dsc.defaultSourceCodeDescription',
    ]);

    return query.getMany();
  }
}
