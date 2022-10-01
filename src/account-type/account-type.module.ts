import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountTypeController } from './account-type.controller';
import { AccountTypeService } from './account-type.service';
import { AccountTypeRepository } from './account-type.repository';
import { AccountTypeMap } from '../maps/account-type.map';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountTypeRepository]),
  ],
  controllers: [
    AccountTypeController
  ],
  providers: [
    AccountTypeMap,
    AccountTypeService,
  ],
  exports: [
    TypeOrmModule,
  ]
})
export class AccountTypeModule {}
