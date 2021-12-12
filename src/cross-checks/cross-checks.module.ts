import { ParameterMethodSubDataMap } from './../maps/parameter-method-subdata.map';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CrossChecksController } from './cross-checks.controller';
import { CrossChecksService } from './cross-checks.service';
//import { CrossChecksRepository } from './cross-checks.repository';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],//TypeOrmModule.forFeature([CrossChecksRepository]), HttpModule],
  controllers: [CrossChecksController],
  providers: [ParameterMethodSubDataMap, CrossChecksService, ConfigService],
})
export class CrossChecksModule {}
