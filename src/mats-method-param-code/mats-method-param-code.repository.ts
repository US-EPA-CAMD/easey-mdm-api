import { EntityRepository, Repository } from 'typeorm';
import { MatsMethodParamCode } from '../entities/mats-method-parameter-code.entity';

@EntityRepository(MatsMethodParamCode)
export class MatsMethodParamCodeRepository extends Repository<
  MatsMethodParamCode
> {
  async getMatsMethodParamCodes(): Promise<MatsMethodParamCode[]> {
    const query = await this.createQueryBuilder('mmpc').select([
      'mmpc.matsMethodParamCode',
      'mmpc.matsMethodParamCodeDescription',
    ]);

    return query.getMany();
  }
}
