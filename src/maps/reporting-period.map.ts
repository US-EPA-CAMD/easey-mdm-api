import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriod } from 'src/entities/reporting-period.entity';

export class ReportingPeriodMap extends BaseMap<
  ReportingPeriod,
  ReportingPeriodDTO
> {
  async one(entity: ReportingPeriod): Promise<ReportingPeriodDTO> {
    return {
      id:
        entity.id,
      calendarYear:
        entity.calendarYear,
      quarter:
        entity.quarter,
      beginDate:
        entity.beginDate,
      endDate:
        entity.endDate,
      periodDescription:
        entity.periodDescription,
      periodAbbreviation:
        entity.periodAbbreviation,
      archiveInd:
        entity.archiveInd,
    };
  }
}
