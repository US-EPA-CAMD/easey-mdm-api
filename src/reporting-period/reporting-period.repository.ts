import { EntityRepository, Repository } from 'typeorm';
import { ReportingPeriod } from '../entities/reporting-period.entity';

@EntityRepository(ReportingPeriod)
export class ReportingPeriodRepository extends Repository<ReportingPeriod> {
  async getReportingPeriods(): Promise<ReportingPeriod[]> {
    const today = new Date(Date.now());
    const currentYear = today.getFullYear();
    const currentQuarter = Math.floor(today.getMonth() / 3 + 1);
    const periodAbbreviation = `${currentYear} Q${currentQuarter}`;

    return this.createQueryBuilder('rp')
      .select()
      .where('rp.period_abbreviation <= :periodAbbreviation', {
        periodAbbreviation,
      })
      .getMany();
  }
}
