import { ApiProperty } from '@nestjs/swagger';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';
import { DataColumnDTO } from './datacolumn.dto';

export class DataTableDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.tableOrder,
      DataDictionary.properties.tableOrder?.metadata.dataTable,
    )
  )
  tableOrder: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.displayName,
      DataDictionary.properties.displayName?.metadata.dataTable,
    )
  )
  displayName: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.noResultsMessage,
      DataDictionary.properties.noResultsMessage?.metadata.dataTable,
    )
  )
  noResultsMessage: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.columns,
      DataDictionary.properties.columns?.metadata.dataTable,
    )
  )
  columns: DataColumnDTO[];
}