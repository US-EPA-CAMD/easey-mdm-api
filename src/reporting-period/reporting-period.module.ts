import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportingPeriodService } from './reporting-period.service';
import { ReportingPeriodController } from './reporting-period.controller';
import { ReportingPeriodRepository } from './reporting-period.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReportingPeriodRepository])],
  controllers: [ReportingPeriodController],
  providers: [ReportingPeriodService],
})
export class ReportingPeriodModule {}
