import { ApiProperty } from '@nestjs/swagger';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

export class UnitTypeDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.CODE,
      OverrideKeys.UNIT_TYPE,
  ))
  unitTypeCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DESCRIPTION,
      OverrideKeys.UNIT_TYPE,
  ))
  unitTypeDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.GROUP_CODE,
      OverrideKeys.UNIT_TYPE,
  ))
  unitTypeGroupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.GROUP_DESCRIPTION,
      OverrideKeys.UNIT_TYPE,
  ))
  unitTypeGroupDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.ORDER,
      OverrideKeys.UNIT_TYPE,
  ))
  sortOrder: string;  
}
