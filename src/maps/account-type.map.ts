import { Injectable } from '@nestjs/common';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { AccountType } from '../entities/account-type-code.entity';
import { AccountTypeDTO } from '../dto/account-type.dto';

@Injectable()
export class AccountTypeMap extends BaseMap<AccountType, AccountTypeDTO> {
  public async one(entity: AccountType): Promise<any> {
    return {
      [propertyMetadata.accountTypeCode.fieldLabels.value]:
        entity.accountTypeCode,
      [propertyMetadata.accountTypeDescription.fieldLabels.value]:
        entity.accountTypeDescription,
      [propertyMetadata.accountTypeGroupCode.fieldLabels.value]:
        entity.accountTypeGroupCode,
      [propertyMetadata.accountTypeGroupDescription.fieldLabels.value]:
        entity.accountTypeGroup.accountTypeGroupDescription,
    };
  }
}
