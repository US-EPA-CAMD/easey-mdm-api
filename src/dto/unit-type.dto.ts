import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class UnitTypeDTO {
  @ApiProperty({
    description: propertyMetadata.unitTypeCode.description,
    example: propertyMetadata.unitTypeCode.example,
  })
  unitTypeCode: string;

  @ApiProperty({
    description: propertyMetadata.unitTypeDescription.description,
    example: propertyMetadata.unitTypeDescription.example,
  })
  unitTypeDescription: string;

  @ApiProperty({
    description: propertyMetadata.unitTypeGroupCode.description,
    example: propertyMetadata.unitTypeGroupCode.example,
  })
  unitTypeGroupCode: string;

  @ApiProperty({
    description: propertyMetadata.unitTypeGroupDescription.description,
    example: propertyMetadata.unitTypeGroupDescription.example,
  })
  unitTypeGroupDescription: string;

  @ApiProperty({
    description: propertyMetadata.sortOrder.description,
    example: propertyMetadata.sortOrder.example,
  })
  sortOrder: string;  
}
