import { ApiProperty } from '@nestjs/swagger';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class AccountTypeDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.accountTypeCode,
      DataDictionary.properties.accountTypeCode?.metadata.accountType,
    )
  )
  accountTypeCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.accountTypeDescription,
      DataDictionary.properties.accountTypeDescription?.metadata.accountType,
    )
  )
  accountTypeDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.accountTypeGroupCode,
      DataDictionary.properties.accountTypeGroupCode?.metadata.accountType,
    )
  )
  accountTypeGroupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.accountTypeGroupDescription,
      DataDictionary.properties.accountTypeGroupDescription?.metadata.accountType,
    )
  )
  accountTypeGroupDescription: string;
}
