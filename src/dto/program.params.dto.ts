import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { Program } from '@us-epa-camd/easey-common/enums';

export class ProgramParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  exclude?: Program[];

  @IsOptional()
  @ApiPropertyOptional({ nullable: true })
  isActive?: boolean;

  @IsOptional()
  @ApiPropertyOptional({ nullable: true })
  emissionsUIFilter?: boolean;

  @IsOptional()
  @ApiPropertyOptional({ nullable: true })
  allowanceUIFilter?: boolean;

  @IsOptional()
  @ApiPropertyOptional({ nullable: true })
  complianceUIFilter?: boolean;
}
