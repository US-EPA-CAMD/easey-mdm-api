import { ApiProperty } from '@nestjs/swagger';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

import { DataTableDTO } from './datatable.dto';

export class DataSetDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.CODE,
      OverrideKeys.DATASET,
  ))
  dataSetCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.GROUP_CODE,
      OverrideKeys.DATASET,
  ))
  groupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DISPLAY_NAME,
      OverrideKeys.DATASET,
  ))
  displayName: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.NO_RESULT_MSG,
      OverrideKeys.DATASET,
  ))
  noResultsMessage: string;

  @ApiProperty()
  tables: DataTableDTO[];
}
