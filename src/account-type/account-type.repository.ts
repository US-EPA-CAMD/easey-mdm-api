import { Repository, EntityRepository } from 'typeorm';

import { AccountType } from '../entities/account-type.entity';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';

@EntityRepository(AccountType)
export class AccountTypeRepository extends Repository<AccountType> {
  async getAccountTypeCodes(
    params: AccountTypeParamsDTO,
  ): Promise<AccountType[]> {
    const { exclude } = params;
    const query = this.createQueryBuilder('at')
      .select([
        'at.accountTypeCode',
        'at.accountTypeDescription',
        'at.accountTypeGroupCode',
        'atg.accountTypeGroupDescription',
      ])
      .innerJoin('at.accountTypeGroup', 'atg')
      .orderBy('at.accountTypeCode');

    if (exclude) {
      query.andWhere('at.accountTypeCode NOT IN (:...accountTypeCodes)', {
        accountTypeCodes: exclude.map(i => i.toUpperCase())
      });
    }

    return query.getMany();
  }
}
