import {
  ApiTags,
  ApiOkResponse,
  ApiQuery,
  ApiSecurity,
} from '@nestjs/swagger';
import { Get, Controller, Query } from '@nestjs/common';

import { AccountTypeDTO } from '../dto/account-type.dto';
import { AccountTypeService } from './account-type.service';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Account Type Codes')
export class AccountTypeController {
  constructor(
    private readonly service: AccountTypeService
  ) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: AccountTypeDTO,
    description: 'Returns a list of Account Type Codes',
  })
  @ApiQuery({
    style: 'pipeDelimited',
    name: 'exclude',
    required: false,
    explode: false,
  })
  getAccountTypeCodes(
    @Query() params: AccountTypeParamsDTO,
  ): Promise<AccountTypeDTO[]> {
    return this.service.getAccountTypeCodes(params);
  }
}
