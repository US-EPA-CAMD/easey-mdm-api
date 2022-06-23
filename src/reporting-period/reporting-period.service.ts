import { Injectable } from '@nestjs/common';
import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodRepository } from './reporting-period.repository';

@Injectable()
export class ReportingPeriodService {
  constructor(private readonly repository: ReportingPeriodRepository) {}

  async getReportingPeriods(): Promise<ReportingPeriodDTO[]> {
    return await this.repository.getReportingPeriods();
  }
}
