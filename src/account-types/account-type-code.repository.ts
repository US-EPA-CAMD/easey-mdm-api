import { Repository, EntityRepository } from 'typeorm';

import { AccountType } from '../entities/account-type-code.entity';

@EntityRepository(AccountType)
export class AccountTypeRepository extends Repository<AccountType> {
  async getAllAccountTypes(): Promise<AccountType[]> {
    const query = this.createQueryBuilder('at')
      .select([
        'at.accountTypeCode',
        'at.accountTypeDescription',
        'at.accountTypeGroupCode',
        'atg.accountTypeGroupDescription',
      ])
      .innerJoin('at.accountTypeGroup', 'atg')
      .orderBy('at.accountTypeCode');

    return query.getMany();
  }
}
