import { ApiProperty } from '@nestjs/swagger';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

export class AccountTypeDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.CODE,
      OverrideKeys.ACCOUNT_TYPE,
  ))
  accountTypeCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DESCRIPTION,
      OverrideKeys.ACCOUNT_TYPE,
  ))
  accountTypeDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.GROUP_CODE,
      OverrideKeys.ACCOUNT_TYPE,
  ))
  accountTypeGroupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.GROUP_DESCRIPTION,
      OverrideKeys.ACCOUNT_TYPE,
  ))
  accountTypeGroupDescription: string;
}
