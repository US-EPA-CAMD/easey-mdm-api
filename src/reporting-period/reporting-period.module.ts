import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReportingPeriodController } from './reporting-period.controller';
import { ReportingPeriodRepository } from './reporting-period.repository';
import { ReportingPeriodService } from './reporting-period.service';
import { ReportingPeriodMap } from '../maps/reporting-period.map';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportingPeriodRepository]),
  ],
  controllers: [
    ReportingPeriodController,
  ],
  providers: [
    ReportingPeriodMap,
    ReportingPeriodService,
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class ReportingPeriodModule {}
