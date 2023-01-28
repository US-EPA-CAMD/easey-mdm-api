import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ReportingPeriodParamsDTO {
  @IsOptional()
  @ApiProperty({ nullable: true })
  @Transform(({ value }) => {
    return [true, 'enabled', 'true'].indexOf(value) > -1;
  })
  export?: boolean;
}
