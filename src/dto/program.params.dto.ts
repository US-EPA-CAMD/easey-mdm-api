import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { Programs } from '../enums/program.enum';

export class ProgramParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  exclude?: Programs[];

  @IsOptional()
  @ApiPropertyOptional({ nullable: true })
  allowanceOnly?: boolean;

  @IsOptional()
  @ApiPropertyOptional({ nullable: true })
  isActive?: boolean;
}
