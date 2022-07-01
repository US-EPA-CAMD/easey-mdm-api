import { Injectable } from '@nestjs/common';
import { LessThan } from 'typeorm';
import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodRepository } from './reporting-period.repository';

@Injectable()
export class ReportingPeriodService {
  constructor(private readonly repository: ReportingPeriodRepository) {}

  async getReportingPeriods(): Promise<ReportingPeriodDTO[]> {
    const today = new Date(Date.now());
    const currentYear = today.getFullYear();
    const currentQuarter = Math.floor(today.getMonth() / 3 + 1);
    const periodAbbreviation = `${currentYear} Q${currentQuarter}`;

    return this.repository.find({
      where: { periodAbbreviation: LessThan(periodAbbreviation) },
    });
  }
}
