import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class AccountTypeDTO {
  @ApiProperty({
    description: propertyMetadata.accountTypeCode.description,
    example: propertyMetadata.accountTypeCode.example,
    name: propertyMetadata.accountTypeCode.fieldLabels.value,
  })
  accountTypeCode: string;

  @ApiProperty({
    description: propertyMetadata.accountTypeDescription.description,
    example: propertyMetadata.accountTypeDescription.example,
    name: propertyMetadata.accountTypeDescription.fieldLabels.value,
  })
  accountTypeDescription: string;

  @ApiProperty({
    description: propertyMetadata.accountTypeGroupCode.description,
    example: propertyMetadata.accountTypeGroupCode.example,
    name: propertyMetadata.accountTypeGroupCode.fieldLabels.value,
  })
  accountTypeGroupCode: string;

  @ApiProperty({
    description: propertyMetadata.accountTypeGroupDescription.description,
    example: propertyMetadata.accountTypeGroupDescription.example,
    name: propertyMetadata.accountTypeGroupDescription.fieldLabels.value,
  })
  accountTypeGroupDescription: string;
}
