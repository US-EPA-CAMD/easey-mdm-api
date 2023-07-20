import { LessThan, LessThanOrEqual } from 'typeorm';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EaseyException } from '@us-epa-camd/easey-common/exceptions';

import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodMap } from '../maps/reporting-period.map';
import { ReportingPeriodRepository } from './reporting-period.repository';

@Injectable()
export class ReportingPeriodService {
  constructor(
    @InjectRepository(ReportingPeriodRepository)
    private readonly repository: ReportingPeriodRepository,
    private readonly map: ReportingPeriodMap,
  ) {}

  async getReportingPeriods(isExport?: boolean): Promise<ReportingPeriodDTO[]> {
    try {
      const today = new Date(Date.now());
      const currentYear = today.getFullYear();
      const currentQuarter = Math.floor(today.getMonth() / 3 + 1);
      const periodAbbreviation = `${currentYear} Q${currentQuarter}`;

      const results = await this.repository.find({
        where: {
          periodAbbreviation: isExport
            ? LessThan(periodAbbreviation)
            : LessThanOrEqual(periodAbbreviation),
        },
      });
      return this.map.many(results);
    } catch (e) {
      throw new EaseyException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
