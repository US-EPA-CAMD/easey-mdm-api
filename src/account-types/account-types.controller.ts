import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { AccountTypeDTO } from '../dto/account-type.dto';
import { AccountTypesService } from './account-types.service';

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
  getAllAccountTypes(): Promise<AccountTypeDTO[]> {
    return this.accountTypesService.getAllAccountTypes();
  }
}
