import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AccountTypeDTO } from '../dto/account-type.dto';
import { AccountTypeMap } from '../maps/account-type.map';
import { AccountTypeRepository } from './account-type-code.repository';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';

@Injectable()
export class AccountTypesService {
  constructor(
    @InjectRepository(AccountTypeRepository)
    private readonly repository: AccountTypeRepository,
    private readonly map: AccountTypeMap,
  ) {}

  async getAllAccountTypes(
    accountTypeParamsDTO: AccountTypeParamsDTO,
  ): Promise<AccountTypeDTO[]> {
    const query = await this.repository.getAllAccountTypes(
      accountTypeParamsDTO,
    );
    return this.map.many(query);
  }
}
