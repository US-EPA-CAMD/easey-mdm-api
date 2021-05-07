import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { Get, Controller, Query } from '@nestjs/common';

import { AccountTypeDTO } from '../dto/account-type.dto';
import { AccountTypesService } from './account-types.service';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';

@ApiTags('Account Types')
@Controller()
export class AccountTypesController {
  constructor(private readonly accountTypesService: AccountTypesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieved All Valid Account Types',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  @ApiQuery({
    style: 'pipeDelimited',
    name: 'exclude',
    required: false,
    explode: false,
  })
  getAllAccountTypes(
    @Query() accountTypeParamsDTO: AccountTypeParamsDTO,
  ): Promise<AccountTypeDTO[]> {
    return this.accountTypesService.getAllAccountTypes(accountTypeParamsDTO);
  }
}
