import { EntityRepository, Repository } from 'typeorm';
import { DefaultPurposeCode } from '../entities/default-purpose-code.entity';

@EntityRepository(DefaultPurposeCode)
export class DefaultPurposeCodeRepository extends Repository<
  DefaultPurposeCode
> {
  async getDefaultPurposeCodes(): Promise<DefaultPurposeCode[]> {
    const query = this.createQueryBuilder('dpc').select([
      'dpc.defaultPurposeCode',
      'dpc.defaultPurposeCodeDescription',
    ]);

    return query.getMany();
  }
}
