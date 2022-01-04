import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiSecurity,
  ApiExtraModels,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { TransactionTypeDTO } from '../dto/transaction-type.dto';
import { TransactionTypesService } from './transaction-types.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Transaction Types')
export class TransactionTypesController {
  constructor(
    private readonly transactionTypesService: TransactionTypesService,
  ) {}

  @Get()
  @ApiOkResponse({
    type: TransactionTypeDTO,
    description: 'Retrieved All Valid Transaction Types',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  @ApiExtraModels(TransactionTypeDTO)
  getAllTransactionTypes(): Promise<TransactionTypeDTO[]> {
    return this.transactionTypesService.getAllTransactionTypes();
  }
}
