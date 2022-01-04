import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class UnitTypeDTO {
  @ApiProperty({
    description: propertyMetadata.unitTypeCode.description,
    example: propertyMetadata.unitTypeCode.example,
    name: propertyMetadata.unitTypeCode.fieldLabels.value,
  })
  unitTypeCode: string;

  @ApiProperty({
    description: propertyMetadata.unitTypeDescription.description,
    example: propertyMetadata.unitTypeDescription.example,
    name: propertyMetadata.unitTypeDescription.fieldLabels.value,
  })
  unitTypeDescription: string;

  @ApiProperty({
    name: propertyMetadata.sortOrder.fieldLabels.value,
    example: propertyMetadata.sortOrder.example,
  })
  sortOrder: string;

  @ApiProperty({
    description: propertyMetadata.unitTypeGroupCode.description,
    example: propertyMetadata.unitTypeGroupCode.example,
    name: propertyMetadata.unitTypeGroupCode.fieldLabels.value,
  })
  unitTypeGroupCode: string;

  @ApiProperty({
    description: propertyMetadata.unitTypeGroupDescription.description,
    example: propertyMetadata.unitTypeGroupDescription.example,
    name: propertyMetadata.unitTypeGroupDescription.fieldLabels.value,
  })
  unitTypeGroupDescription: string;
}
