export class ReportingPeriodDTO {
  id: number;
  calendarYear: number;
  quarter: number;
  beginDate: Date;
  endDate: Date;
  periodDescription: string;
  periodAbbreviation: string;
  archiveInd: number;
}
