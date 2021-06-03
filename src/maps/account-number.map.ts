import { Injectable } from '@nestjs/common';

import { BaseMap } from './base.map';
import { AccountFact } from '../entities/account-fact.entity';
import { AccountNumberDTO } from '../dto/account-number.dto';

@Injectable()
export class AccountNumberMap extends BaseMap<AccountFact, AccountNumberDTO> {
  public async one(entity: AccountFact): Promise<AccountNumberDTO> {
    return {
      accountNumber: entity.accountNumber,
      accountName: entity.accountName,
    };
  }
}
