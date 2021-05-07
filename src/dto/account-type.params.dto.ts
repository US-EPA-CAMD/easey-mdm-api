import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { AccountTypes } from 'src/enums/account-type.enum';

export class AccountTypeParamsDTO {
  @IsOptional()
  @Transform(({ value }) => value.split('|').map(item => item.trim()))
  exclude?: AccountTypes[];
}
