import { Repository, EntityRepository } from 'typeorm';

import { TransactionType } from '../entities/transaction-type-code.entity';

@EntityRepository(TransactionType)
export class TransactionTypeRepository extends Repository<TransactionType> {}
