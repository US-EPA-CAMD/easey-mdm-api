import { Repository, EntityRepository } from 'typeorm';

import { TransactionType } from '../entities/transaction-type-code.entity';

@EntityRepository(TransactionType)
export class TransactionTypeRepository extends Repository<TransactionType> {
//   async getAllTransactionTypes(): Promise<TransactionType[]> {
//     const query = this.createQueryBuilder('tt')
//       .select([
//         'tt.transactionTypeCode',
//         'tt.transactionTypeDescription',
//       ])
//       .orderBy('tt.transactionTypeCode');

//     return query.getMany();
//   }
}
