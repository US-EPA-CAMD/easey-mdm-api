import { ApiProperty } from '@nestjs/swagger';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class ReportingPeriodDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.id,
      DataDictionary.properties.id?.metadata.reportingPeriod,
    )
  )
  id: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.calendarYear,
      DataDictionary.properties.calendarYear?.metadata.reportingPeriod,
    )
  )
  calendarYear: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.quarter,
      DataDictionary.properties.quarter?.metadata.reportingPeriod,
    )
  )
  quarter: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.beginDate,
      DataDictionary.properties.beginDate?.metadata.reportingPeriod,
    )
  )
  beginDate: Date;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.endDate,
      DataDictionary.properties.endDate?.metadata.reportingPeriod,
    )
  )
  endDate: Date;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.periodDescription,
      DataDictionary.properties.periodDescription?.metadata.reportingPeriod,
    )
  )
  periodDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.periodAbbreviation,
      DataDictionary.properties.periodAbbreviation?.metadata.reportingPeriod,
    )
  )
  periodAbbreviation: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.archiveInd,
      DataDictionary.properties.archiveInd?.metadata.reportingPeriod,
    )
  )
  archiveInd: number;
}
