import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { TransactionTypeDTO } from '../dto/transaction-type.dto';
import { TransactionTypesService } from './transaction-types.service';

@ApiTags('Transaction Types')
@Controller()
export class TransactionTypesController {
  constructor(
    private readonly transactionTypesService: TransactionTypesService,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieved All Valid Transaction Types',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  getAllTransactionTypes(): Promise<TransactionTypeDTO[]> {
    return this.transactionTypesService.getAllTransactionTypes();
  }
}
