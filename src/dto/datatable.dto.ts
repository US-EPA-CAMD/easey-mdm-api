import { ApiProperty } from '@nestjs/swagger';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

import { DataColumnDTO } from './datacolumn.dto';

export class DataTableDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.ORDER,
      OverrideKeys.DATATABLE,
  ))
  tableOrder: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DISPLAY_NAME,
      OverrideKeys.DATATABLE,
  ))
  displayName: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.NO_RESULT_MSG,
      OverrideKeys.DATATABLE,
  ))
  noResultsMessage: string;

  @ApiProperty()
  columns: DataColumnDTO[];
}