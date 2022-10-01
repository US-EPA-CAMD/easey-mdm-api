import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class FuelTypeDTO {
  @ApiProperty({
    description: propertyMetadata.fuelTypeCode.description,
    example: propertyMetadata.fuelTypeCode.example,
  })
  fuelTypeCode: string;

  @ApiProperty({
    description: propertyMetadata.fuelTypeDescription.description,
    example: propertyMetadata.fuelTypeDescription.example,
  })
  fuelTypeDescription: string;

  @ApiProperty({
    description: propertyMetadata.fuelGroupCode.description,
    example: propertyMetadata.fuelGroupCode.example,
  })
  fuelGroupCode: string;

  @ApiProperty({
    description: propertyMetadata.fuelGroupDescription.description,
    example: propertyMetadata.fuelGroupDescription.example,
  })
  fuelGroupDescription: string;
}
