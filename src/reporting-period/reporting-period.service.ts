import { HttpStatus, Injectable } from '@nestjs/common';
import { EaseyException } from '@us-epa-camd/easey-common/exceptions';
import { LessThan, LessThanOrEqual } from 'typeorm';

import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodMap } from '../maps/reporting-period.map';
import { ReportingPeriodRepository } from './reporting-period.repository';

@Injectable()
export class ReportingPeriodService {
  constructor(
    private readonly repository: ReportingPeriodRepository,
    private readonly map: ReportingPeriodMap,
  ) {}

  async getReportingPeriods(
    excludeCurrentQuarter?: boolean,
  ): Promise<ReportingPeriodDTO[]> {
    try {
      const today = new Date(Date.now());
      const currentYear = today.getFullYear();
      const currentQuarter = Math.floor(today.getMonth() / 3 + 1);
      const whereConditions: any = excludeCurrentQuarter
        ? [
            { calendarYear: LessThan(currentYear) },
            {
              calendarYear: currentYear,
              quarter: LessThan(currentQuarter)
            }
          ]
        : [
            { calendarYear: LessThan(currentYear) },
            {
              calendarYear: currentYear,
              quarter: LessThanOrEqual(currentQuarter)
            }
          ];

      const results = await this.repository.find({
        where: whereConditions,
        order: {
          calendarYear: 'DESC',
          quarter: 'DESC'
        }
      });
      return this.map.many(results);
    } catch (e) {
      throw new EaseyException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}