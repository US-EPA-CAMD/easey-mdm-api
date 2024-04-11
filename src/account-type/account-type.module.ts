import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountTypeMap } from '../maps/account-type.map';
import { AccountTypeController } from './account-type.controller';
import { AccountTypeRepository } from './account-type.repository';
import { AccountTypeService } from './account-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountTypeRepository])],
  controllers: [AccountTypeController],
  providers: [AccountTypeMap, AccountTypeRepository, AccountTypeService],
  exports: [TypeOrmModule],
})
export class AccountTypeModule {}
