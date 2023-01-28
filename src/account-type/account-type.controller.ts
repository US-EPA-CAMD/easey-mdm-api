import {
  ApiTags,
  ApiOkResponse,
  ApiQuery,
  ApiSecurity,
  ApiOperation,
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
    description: 'Data retrieved successfully',
  })
  @ApiQuery({
    style: 'pipeDelimited',
    name: 'exclude',
    required: false,
    explode: false,
  })
  @ApiOperation({
    description: "Returns a list of Account Type codes & descriptions."
  })
  getAccountTypeCodes(
    @Query() params: AccountTypeParamsDTO,
  ): Promise<AccountTypeDTO[]> {
    return this.service.getAccountTypeCodes(params);
  }
}
