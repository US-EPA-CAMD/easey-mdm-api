import { ApiProperty } from '@nestjs/swagger';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

export class ReportingPeriodDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.ID,
      OverrideKeys.REPORTING_PERIOD,
  ))
  id: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.YEAR,
      OverrideKeys.REPORTING_PERIOD,
  ))
  calendarYear: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.QUARTER,
      OverrideKeys.REPORTING_PERIOD,
  ))
  quarter: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.BEGIN_DATE,
      OverrideKeys.REPORTING_PERIOD,
  ))
  beginDate: Date;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.END_DATE,
      OverrideKeys.REPORTING_PERIOD,
  ))
  endDate: Date;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DESCRIPTION,
      OverrideKeys.REPORTING_PERIOD,
  ))
  periodDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.ABBREVIATION,
      OverrideKeys.REPORTING_PERIOD,
  ))
  periodAbbreviation: string;

  @ApiProperty()
  archiveInd: number;
}
