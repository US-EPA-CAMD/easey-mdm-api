import { Injectable } from '@nestjs/common';

import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { TransactionType } from '../entities/transaction-type-code.entity';
import { TransactionTypeDTO } from '../dto/transaction-type.dto';

@Injectable()
export class TransactionTypeMap extends BaseMap<
  TransactionType,
  TransactionTypeDTO
> {
  public async one(entity: TransactionType): Promise<TransactionTypeDTO> {
    return {
      transactionTypeCode: entity.transactionTypeCode,
      transactionTypeDescription: entity.transactionTypeDescription,
    };
  }
}
