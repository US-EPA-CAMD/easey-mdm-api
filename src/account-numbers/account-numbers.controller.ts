import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { AccountNumbersService } from './account-numbers.service';
import { AccountNumberDTO } from '../dto/account-number.dto';

@ApiTags('Account Numbers')
@Controller()
export class AccountNumbersController {
  constructor(private readonly accountNumbersService: AccountNumbersService) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieved All Valid Account Numbers',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  getAllAccountNumbers(): Promise<AccountNumberDTO[]> {
    return this.accountNumbersService.getAllAccountNumbers();
  }
}
