import { MethodCode } from '../entities/method-code.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MethodCode)
export class MethodCodeRepository extends Repository<MethodCode> {
  async getMethodCodes(): Promise<MethodCode[]> {
    const query = this.createQueryBuilder('mc').select([
      'mc.methodCode',
      'mc.methodCodeDescription',
    ]);

    return query.getMany();
  }
}
