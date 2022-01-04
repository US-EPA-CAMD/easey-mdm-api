import { Injectable } from '@nestjs/common';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { TransactionType } from '../entities/transaction-type-code.entity';
import { TransactionTypeDTO } from '../dto/transaction-type.dto';

@Injectable()
export class TransactionTypeMap extends BaseMap<
  TransactionType,
  TransactionTypeDTO
> {
  public async one(entity: TransactionType): Promise<any> {
    return {
      [propertyMetadata.transactionTypeCode.fieldLabels.value]:
        entity.transactionTypeCode,
      [propertyMetadata.transactionTypeDescription.fieldLabels.value]:
        entity.transactionTypeDescription,
    };
  }
}
