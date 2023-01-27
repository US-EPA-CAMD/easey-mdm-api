import { ApiProperty } from '@nestjs/swagger';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';
import { DataTableDTO } from './datatable.dto';

export class DataSetDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.dataSetCode,
      DataDictionary.properties.dataSetCode?.metadata.dataSet,
    )
  )
  dataSetCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.groupCode,
      DataDictionary.properties.groupCode?.metadata.dataSet,
    )
  )
  groupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.displayName,
      DataDictionary.properties.displayName?.metadata.dataSet,
    )
  )
  displayName: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.noResultsMessage,
      DataDictionary.properties.noResultsMessage?.metadata.dataSet,
    )
  )
  noResultsMessage: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.tables,
      DataDictionary.properties.tables?.metadata.dataSet,
    )
  )
  tables: DataTableDTO[];
}
