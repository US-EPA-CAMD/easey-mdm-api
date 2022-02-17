import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { Program } from '@us-epa-camd/easey-common/enums';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class ProgramParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  @ApiProperty({
    enum: Program,
    description: propertyMetadata.exclude.description,
  })
  exclude?: Program[];

  @IsOptional()
  @ApiProperty({
    nullable: true,
    description: propertyMetadata.isActive.description,
  })
  isActive?: boolean;

  @IsOptional()
  @ApiProperty({
    nullable: true,
    description: propertyMetadata.emissionsUIFilter.description,
  })
  emissionsUIFilter?: boolean;

  @IsOptional()
  @ApiProperty({
    nullable: true,
    description: propertyMetadata.allowanceUIFilter.description,
  })
  allowanceUIFilter?: boolean;

  @IsOptional()
  @ApiProperty({
    nullable: true,
    description: propertyMetadata.complianceUIFilter.description,
  })
  complianceUIFilter?: boolean;
}
