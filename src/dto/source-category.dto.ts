import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class SourceCategoryDTO {
  @ApiProperty({
    description: propertyMetadata.sourceCategoryCode.description,
    example: propertyMetadata.sourceCategoryCode.example,
    name: propertyMetadata.sourceCategoryCode.fieldLabels.value,
  })
  sourceCategoryCode: string;

  @ApiProperty({
    description: propertyMetadata.sourceCategoryDescription.description,
    example: propertyMetadata.sourceCategoryDescription.example,
    name: propertyMetadata.sourceCategoryDescription.fieldLabels.value,
  })
  sourceCategoryDescription: string;
}
