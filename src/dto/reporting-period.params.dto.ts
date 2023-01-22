import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class ReportingPeriodParamsDTO {
  @IsOptional()
  @ApiProperty({
    nullable: true,
  })
  @Transform(({ value }) => {
    return [true, 'enabled', 'true'].indexOf(value) > -1;
  })
  export?: boolean;
}
