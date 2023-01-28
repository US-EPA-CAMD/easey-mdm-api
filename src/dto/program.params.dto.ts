import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Program } from '@us-epa-camd/easey-common/enums';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

export class ProgramParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  @ApiProperty({
    enum: Program,
    ...DataDictionary.getMetadata(
      PropertyKeys.EXCLUDE,
      OverrideKeys.PROGRAM,
      true,
  )})
  exclude?: Program[];

  @IsOptional()
  @ApiProperty({ nullable: true })
  isActive?: boolean;

  @IsOptional()
  @ApiProperty({ nullable: true })
  emissionsUIFilter?: boolean;

  @IsOptional()
  @ApiProperty({ nullable: true })
  allowanceUIFilter?: boolean;

  @IsOptional()
  @ApiProperty({ nullable: true })
  complianceUIFilter?: boolean;
}
