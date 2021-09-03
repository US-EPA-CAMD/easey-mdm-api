import { EntityRepository, Repository } from 'typeorm';
import { SystemDesignationCode } from '../entities/system-designation-code.entity';

@EntityRepository(SystemDesignationCode)
export class SystemDesignationCodeRepository extends Repository<
  SystemDesignationCode
> {
  async getSystemDesignationCodes(): Promise<SystemDesignationCode[]> {
    const query = this.createQueryBuilder('sdc').select([
      'sdc.systemDesignationCode',
      'sdc.systemDesignationCodeDescription',
    ]);

    return query.getMany();
  }
}
