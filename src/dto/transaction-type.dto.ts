import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class TransactionTypeDTO {
  @ApiProperty({
    description: propertyMetadata.transactionTypeCode.description,
    example: propertyMetadata.transactionTypeCode.example,
    name: propertyMetadata.transactionTypeCode.fieldLabels.value,
  })
  transactionTypeCode: string;

  @ApiProperty({
    description: propertyMetadata.transactionTypeDescription.description,
    example: propertyMetadata.transactionTypeDescription.example,
    name: propertyMetadata.transactionTypeDescription.fieldLabels.value,
  })
  transactionTypeDescription: string;
}
