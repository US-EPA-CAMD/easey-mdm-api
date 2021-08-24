import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';

import { TransactionTypeDTO } from '../dto/transaction-type.dto';
import { TransactionTypeMap } from '../maps/transaction-type.map';
import { TransactionTypeRepository } from './transaction-type-code.repository';

@Injectable()
export class TransactionTypesService {
  constructor(
    @InjectRepository(TransactionTypeRepository)
    private readonly repository: TransactionTypeRepository,
    private readonly map: TransactionTypeMap,
  ) {}

  async getAllTransactionTypes(): Promise<TransactionTypeDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['transactionTypeCode', 'transactionTypeDescription'],
      order: { transactionTypeCode: 'ASC' },
    };

    const query = await this.repository.find(findOpts);
    return this.map.many(query);
  }
}
