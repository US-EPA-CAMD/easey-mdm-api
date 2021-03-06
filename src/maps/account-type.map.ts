import { Injectable } from '@nestjs/common';

import { BaseMap } from './base.map';
import { AccountType } from '../entities/account-type-code.entity';
import { AccountTypeDTO } from '../dto/account-type.dto';

@Injectable()
export class AccountTypeMap extends BaseMap<AccountType, AccountTypeDTO> {
  public async one(entity: AccountType): Promise<AccountTypeDTO> {
    return {
      accountTypeCode: entity.accountTypeCode,
      accountTypeDescription: entity.accountTypeDescription,
      accountTypeGroupCode: entity.accountTypeGroupCode,
      accountTypeGroupDescription:
        entity.accountTypeGroup.accountTypeGroupDescription,
    };
  }
}
