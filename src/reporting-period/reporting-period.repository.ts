import { EntityRepository, Repository } from 'typeorm';
import { ReportingPeriod } from '../entities/reporting-period.entity';

@EntityRepository(ReportingPeriod)
export class ReportingPeriodRepository extends Repository<ReportingPeriod> {}
