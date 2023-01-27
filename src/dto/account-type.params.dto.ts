import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { AccountTypeCode } from '@us-epa-camd/easey-common/enums';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class AccountTypeParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  @ApiProperty({
    enum: AccountTypeCode,
    ...DataDictionary.getMetadata(
      DataDictionary.properties.exclude,
      DataDictionary.properties.exclude?.metadata.accountType,
    ),
  })
  exclude?: AccountTypeCode[];
}
