import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class AccountTypeDTO {
  @ApiProperty({
    description: propertyMetadata.accountTypeCode.description,
    example: propertyMetadata.accountTypeCode.example,
  })
  accountTypeCode: string;

  @ApiProperty({
    description: propertyMetadata.accountTypeDescription.description,
    example: propertyMetadata.accountTypeDescription.example,
  })
  accountTypeDescription: string;

  @ApiProperty({
    description: propertyMetadata.accountTypeGroupCode.description,
    example: propertyMetadata.accountTypeGroupCode.example,
  })
  accountTypeGroupCode: string;

  @ApiProperty({
    description: propertyMetadata.accountTypeGroupDescription.description,
    example: propertyMetadata.accountTypeGroupDescription.example,
  })
  accountTypeGroupDescription: string;
}
