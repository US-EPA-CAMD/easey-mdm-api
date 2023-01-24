import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class ReportingPeriodDTO {
  @ApiProperty({
    description: 'ADD TO DATA DICTIONARY',
  })
  id: number;

  @ApiProperty({
    description: propertyMetadata.year.description,
    example: propertyMetadata.year.example,
  })
  calendarYear: number;

  @ApiProperty({
    description: propertyMetadata.quarter.description,
    example: propertyMetadata.quarter.example,
  })
  quarter: number;

  @ApiProperty({
    description: propertyMetadata.beginDate.description,
    example: propertyMetadata.beginDate.example,
  })
  beginDate: Date;

  @ApiProperty({
    description: propertyMetadata.endDate.description,
    example: propertyMetadata.endDate.example,
  })
  endDate: Date;

  @ApiProperty({
    description: 'ADD TO DATA DICTIONARY',
  })
  periodDescription: string;

  @ApiProperty({
    description: 'ADD TO DATA DICTIONARY',
  })
  periodAbbreviation: string;

  @ApiProperty({
    description: 'ADD TO DATA DICTIONARY',
  })
  archiveInd: number;
}
