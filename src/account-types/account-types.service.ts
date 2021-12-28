import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';

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
    private readonly logger: Logger,
  ) {}

  async getAllAccountTypes(
    accountTypeParamsDTO: AccountTypeParamsDTO,
  ): Promise<AccountTypeDTO[]> {
    this.logger.info('Getting all account types');
    let query;
    try {
      query = await this.repository.getAllAccountTypes(accountTypeParamsDTO);
    } catch (e) {
      this.logger.error(InternalServerErrorException, e.message);
    }
    this.logger.info('Got all account types');
    return this.map.many(query);
  }
}
