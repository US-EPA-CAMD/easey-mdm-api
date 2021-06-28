import { EntityRepository, Repository } from 'typeorm';
import { ParameterCode } from 'src/entities/parameter-code.entity';

@EntityRepository(ParameterCode)
export class ParameterCodeRepository extends Repository<ParameterCode> {
  async getParameterCodes(): Promise<ParameterCode[]> {
    const query = await this.createQueryBuilder('pc').select([
      'pc.parameterCode',
      'pc.parameterCodeDescription'
    ]);

    return query.getMany()
  }
}
