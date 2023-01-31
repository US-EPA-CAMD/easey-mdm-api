import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { AccountTypeCode } from '@us-epa-camd/easey-common/enums';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

export class AccountTypeParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  @ApiProperty({
    enum: AccountTypeCode,
    ...DataDictionary.getMetadata(
      PropertyKeys.EXCLUDE,
      OverrideKeys.ACCOUNT_TYPE,
      true,
  )})
  exclude?: AccountTypeCode[];
}
