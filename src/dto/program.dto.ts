import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class ProgramDTO {
  @ApiProperty({
    description: propertyMetadata.programCode.description,
    example: propertyMetadata.programCode.example,
    name: propertyMetadata.programCode.fieldLabels.value,
  })
  programCode: string;

  @ApiProperty({
    description: propertyMetadata.programDescription.description,
    example: propertyMetadata.programDescription.example,
    name: propertyMetadata.programDescription.fieldLabels.value,
  })
  programDescription: string;

  @ApiProperty({
    description: propertyMetadata.compParameterCode.description,
    example: propertyMetadata.compParameterCode.example,
    name: propertyMetadata.compParameterCode.fieldLabels.value,
  })
  compParameterCode: string;

  @ApiProperty({
    description: propertyMetadata.programGroupCode.description,
    example: propertyMetadata.programGroupCode.example,
    name: propertyMetadata.programGroupCode.fieldLabels.value,
  })
  programGroupCode: string;

  @ApiProperty({
    description: propertyMetadata.programGroupDescription.description,
    example: propertyMetadata.programGroupDescription.example,
    name: propertyMetadata.programGroupDescription.fieldLabels.value,
  })
  programGroupDescription: string;

  @ApiProperty({
    description: propertyMetadata.ozoneIndicator.description,
    example: propertyMetadata.ozoneIndicator.example,
    name: propertyMetadata.ozoneIndicator.fieldLabels.value,
  })
  ozoneIndicator: boolean;

  @ApiProperty({
    description: propertyMetadata.annualIndicator.description,
    example: propertyMetadata.annualIndicator.example,
    name: propertyMetadata.annualIndicator.fieldLabels.value,
  })
  annualIndicator: boolean;

  @ApiProperty({
    description: propertyMetadata.emissionsUIFilter.description,
    example: propertyMetadata.emissionsUIFilter.example,
    name: propertyMetadata.emissionsUIFilter.fieldLabels.value,
  })
  emissionsUIFilter: boolean;

  @ApiProperty({
    description: propertyMetadata.allowanceUIFilter.description,
    example: propertyMetadata.allowanceUIFilter.example,
    name: propertyMetadata.allowanceUIFilter.fieldLabels.value,
  })
  allowanceUIFilter: boolean;

  @ApiProperty({
    description: propertyMetadata.complianceUIFilter.description,
    example: propertyMetadata.complianceUIFilter.example,
    name: propertyMetadata.complianceUIFilter.fieldLabels.value,
  })
  complianceUIFilter: boolean;

  @ApiProperty({
    description: propertyMetadata.retiredIndicator.description,
    example: propertyMetadata.retiredIndicator.example,
    name: propertyMetadata.retiredIndicator.fieldLabels.value,
  })
  retiredIndicator: boolean;

  @ApiProperty({
    description: propertyMetadata.tradingEndDate.description,
    example: propertyMetadata.tradingEndDate.example,
    name: propertyMetadata.tradingEndDate.fieldLabels.value,
  })
  tradingEndDate: string;
}
