import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountFactRepository } from './account-fact.repository';
import { AccountNumbersController } from './account-numbers.controller';
import { AccountNumberMap } from '../maps/account-number.map';
import { AccountNumbersService } from './account-numbers.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountFactRepository])],
  controllers: [AccountNumbersController],
  providers: [AccountNumberMap, AccountNumbersService],
})
export class AccountNumbersModule {}
