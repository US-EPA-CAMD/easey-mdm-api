import { EntityRepository, Repository } from 'typeorm';
import { ParameterCode } from '../entities/parameter-code.entity';

@EntityRepository(ParameterCode)
export class ParameterCodeRepository extends Repository<ParameterCode> {
  async getParameterCodes(): Promise<ParameterCode[]> {
    const query = this.createQueryBuilder('pc').select([
      'pc.parameterCode',
      'pc.parameterCodeDescription',
    ]);

    return query.getMany();
  }
}
