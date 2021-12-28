import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@us-epa-camd/easey-common/logger';
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
    private readonly Logger: Logger,
  ) {}

  async getAllTransactionTypes(): Promise<TransactionTypeDTO[]> {
    const findOpts: FindManyOptions = {
      select: ['transactionTypeCode', 'transactionTypeDescription'],
      order: { transactionTypeCode: 'ASC' },
    };

    this.Logger.info('Getting all transaction codes');
    let query;
    try {
      query = await this.repository.find(findOpts);
    } catch (e) {
      this.Logger.error(InternalServerErrorException, e.message);
    }
    this.Logger.info('Got all transaction codes codes');

    return this.map.many(query);
  }
}
