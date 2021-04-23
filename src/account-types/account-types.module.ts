import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountTypesController } from './account-types.controller';
import { AccountTypesService } from './account-types.service';
import { AccountTypeMap } from '../maps/account-type.map';
import { AccountTypeRepository } from './account-type-code.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AccountTypeRepository])],
  controllers: [AccountTypesController],
  providers: [AccountTypeMap, AccountTypesService],
})
export class AccountTypesModule {}
