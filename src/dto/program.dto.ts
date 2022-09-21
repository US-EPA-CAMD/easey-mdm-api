import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class ProgramDTO {
  @ApiProperty({
    description: propertyMetadata.programCode.description,
    example: propertyMetadata.programCode.example,
  })
  programCode: string;

  @ApiProperty({
    description: propertyMetadata.programDescription.description,
    example: propertyMetadata.programDescription.example,
  })
  programDescription: string;

  @ApiProperty({
    description: propertyMetadata.compParameterCode.description,
    example: propertyMetadata.compParameterCode.example,
  })
  compParameter: string;

  @ApiProperty({
    description: propertyMetadata.programGroupCode.description,
    example: propertyMetadata.programGroupCode.example,
  })
  programGroupCode: string;

  @ApiProperty({
    description: propertyMetadata.programGroupDescription.description,
    example: propertyMetadata.programGroupDescription.example,
  })
  programGroupDescription: string;

  @ApiProperty({
    description: propertyMetadata.ozoneIndicator.description,
    example: propertyMetadata.ozoneIndicator.example,
  })
  ozoneIndicator: boolean;

  @ApiProperty({
    description: propertyMetadata.annualIndicator.description,
    example: propertyMetadata.annualIndicator.example,
  })
  annualIndicator: boolean;

  @ApiProperty({
    description: propertyMetadata.emissionsUIFilter.description,
    example: propertyMetadata.emissionsUIFilter.example,
  })
  emissionsUIFilter: boolean;

  @ApiProperty({
    description: propertyMetadata.allowanceUIFilter.description,
    example: propertyMetadata.allowanceUIFilter.example,
  })
  allowanceUIFilter: boolean;

  @ApiProperty({
    description: propertyMetadata.complianceUIFilter.description,
    example: propertyMetadata.complianceUIFilter.example,
  })
  complianceUIFilter: boolean;

  @ApiProperty({
    description: propertyMetadata.retiredIndicator.description,
    example: propertyMetadata.retiredIndicator.example,
  })
  retiredIndicator: boolean;

  @ApiProperty({
    description: propertyMetadata.tradingEndDate.description,
    example: propertyMetadata.tradingEndDate.example,
  })
  tradingEndDate: string;
}
