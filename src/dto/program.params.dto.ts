import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { Program } from '../enums/program.enum';

export class ProgramParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  exclude?: Program[];

  @IsOptional()
  allowanceOnly?: boolean;

  @IsOptional()
  activeOnly?: boolean;

  
}
