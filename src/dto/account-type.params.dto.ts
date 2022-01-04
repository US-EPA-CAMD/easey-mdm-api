import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { AccountTypeCode } from '@us-epa-camd/easey-common/enums';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class AccountTypeParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  @ApiProperty({
    enum: AccountTypeCode,
    description: propertyMetadata.exclude.description,
  })
  exclude?: AccountTypeCode[];
}
