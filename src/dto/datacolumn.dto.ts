import { ApiProperty } from '@nestjs/swagger';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

export class DataColumnDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.ORDER,
      OverrideKeys.DATACOLUMN,
  ))
  columnOrder: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.NAME,
      OverrideKeys.DATACOLUMN,
  ))
  name: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.ALIAS,
      OverrideKeys.DATACOLUMN,
  ))
  alias: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DISPLAY_NAME,
      OverrideKeys.DATACOLUMN,
  ))
  displayName: string;
}