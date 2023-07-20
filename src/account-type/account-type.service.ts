import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EaseyException } from '@us-epa-camd/easey-common/exceptions';

import { AccountTypeDTO } from '../dto/account-type.dto';
import { AccountTypeMap } from '../maps/account-type.map';
import { AccountTypeRepository } from './account-type.repository';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';

@Injectable()
export class AccountTypeService {
  constructor(
    @InjectRepository(AccountTypeRepository)
    private readonly repository: AccountTypeRepository,
    private readonly map: AccountTypeMap,
  ) {}

  async getAccountTypeCodes(
    params: AccountTypeParamsDTO,
  ): Promise<AccountTypeDTO[]> {
    try {
      const results = await this.repository.getAccountTypeCodes(params);
      return this.map.many(results);
    } catch (e) {
      throw new EaseyException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
