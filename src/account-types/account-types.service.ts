import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
import { LoggingException } from '@us-epa-camd/easey-common/exceptions';

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
      throw new LoggingException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    this.logger.info('Got all account types');
    return this.map.many(query);
  }
}
