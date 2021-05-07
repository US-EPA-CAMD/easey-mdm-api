import { Repository, EntityRepository } from 'typeorm';

import { AccountType } from '../entities/account-type-code.entity';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';

@EntityRepository(AccountType)
export class AccountTypeRepository extends Repository<AccountType> {
  async getAllAccountTypes(
    accountTypeParamsDTO: AccountTypeParamsDTO,
  ): Promise<AccountType[]> {
    const { exclude } = accountTypeParamsDTO;
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
      query.andWhere(`at.accountTypeCode NOT IN (:...accountTypeCodes)`, {
        accountTypeCodes: exclude.map(accountTypeCodes => {
          return accountTypeCodes.toUpperCase();
        }),
      });
    }
    return query.getMany();
  }
}
