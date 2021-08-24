import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransactionTypesController } from './transaction-types.controller';
import { TransactionTypesService } from './transaction-types.service';
import { TransactionTypeMap } from '../maps/transaction-type.map';
import { TransactionTypeRepository } from './transaction-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionTypeRepository])],
  controllers: [TransactionTypesController],
  providers: [TransactionTypeMap, TransactionTypesService],
})
export class TransactionTypesModule {}
