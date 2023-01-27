import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class ReportingPeriodParamsDTO {
  @IsOptional()
  @ApiProperty({
    nullable: true,
    ...DataDictionary.getMetadata(
      DataDictionary.properties.export,
      DataDictionary.properties.export?.metadata.reportingPeriod,
    )
  })
  @Transform(({ value }) => {
    return [true, 'enabled', 'true'].indexOf(value) > -1;
  })
  export?: boolean;
}
