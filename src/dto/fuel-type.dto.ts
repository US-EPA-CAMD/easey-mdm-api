import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class FuelTypeDTO {
  @ApiProperty({
    description: propertyMetadata.fuelTypeCode.description,
    example: propertyMetadata.fuelTypeCode.example,
    name: propertyMetadata.fuelTypeCode.fieldLabels.value,
  })
  fuelTypeCode: string;

  @ApiProperty({
    description: propertyMetadata.fuelTypeDescription.description,
    example: propertyMetadata.fuelTypeDescription.example,
    name: propertyMetadata.fuelTypeDescription.fieldLabels.value,
  })
  fuelTypeDescription: string;

  @ApiProperty({
    description: propertyMetadata.fuelGroupCode.description,
    example: propertyMetadata.fuelGroupCode.example,
    name: propertyMetadata.fuelGroupCode.fieldLabels.value,
  })
  fuelGroupCode: string;

  @ApiProperty({
    description: propertyMetadata.fuelGroupDescription.description,
    example: propertyMetadata.fuelGroupDescription.example,
    name: propertyMetadata.fuelGroupDescription.fieldLabels.value,
  })
  fuelGroupDescription: string;
}
