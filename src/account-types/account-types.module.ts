import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountTypesController } from './account-types.controller';
import { AccountTypesService } from './account-types.service';
import { AccountTypeMap } from '../maps/account-type.map';
import { AccountTypeRepository } from './account-type-code.repository';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([AccountTypeRepository]), HttpModule],
  controllers: [AccountTypesController],
  providers: [AccountTypeMap, AccountTypesService, ConfigService],
})
export class AccountTypesModule {}
