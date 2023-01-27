import { ApiProperty } from '@nestjs/swagger';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class DataColumnDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.columnOrder,
      DataDictionary.properties.columnOrder?.metadata.dataColumn,
    )
  )
  columnOrder: number;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.name,
      DataDictionary.properties.name?.metadata.dataColumn,
    )
  )
  name: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.alias,
      DataDictionary.properties.alias?.metadata.dataColumn,
    )
  )
  alias: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.displayName,
      DataDictionary.properties.displayName?.metadata.dataColumn,
    )
  )
  displayName: string;
}