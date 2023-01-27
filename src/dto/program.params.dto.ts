import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { Program } from '@us-epa-camd/easey-common/enums';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class ProgramParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  @ApiProperty({
    enum: Program,
    ...DataDictionary.getMetadata(
      DataDictionary.properties.exclude,
      DataDictionary.properties.exclude?.metadata.program,
    )
  })
  exclude?: Program[];

  @IsOptional()
  @ApiProperty({
    nullable: true,
    ...DataDictionary.getMetadata(
      DataDictionary.properties.isActive,
      DataDictionary.properties.isActive?.metadata.program,
    )
  })
  isActive?: boolean;

  @IsOptional()
  @ApiProperty({
    nullable: true,
    ...DataDictionary.getMetadata(
      DataDictionary.properties.emissionsUIFilter,
      DataDictionary.properties.emissionsUIFilter?.metadata.program,
    )
  })
  emissionsUIFilter?: boolean;

  @IsOptional()
  @ApiProperty({
    nullable: true,
    ...DataDictionary.getMetadata(
      DataDictionary.properties.allowanceUIFilter,
      DataDictionary.properties.allowanceUIFilter?.metadata.program,
    )
  })
  allowanceUIFilter?: boolean;

  @IsOptional()
  @ApiProperty({
    nullable: true,
    ...DataDictionary.getMetadata(
      DataDictionary.properties.complianceUIFilter,
      DataDictionary.properties.complianceUIFilter?.metadata.program,
    )
  })
  complianceUIFilter?: boolean;
}
