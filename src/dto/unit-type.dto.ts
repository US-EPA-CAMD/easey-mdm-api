import { ApiProperty } from '@nestjs/swagger';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class UnitTypeDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.unitTypeCode,
      DataDictionary.properties.unitTypeCode?.metadata.unitType,
    )
  )
  unitTypeCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.unitTypeDescription,
      DataDictionary.properties.unitTypeDescription?.metadata.unitType,
    )
  )
  unitTypeDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.unitTypeGroupCode,
      DataDictionary.properties.unitTypeGroupCode?.metadata.unitType,
    )
  )
  unitTypeGroupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.unitTypeGroupDescription,
      DataDictionary.properties.unitTypeGroupDescription?.metadata.unitType,
    )
  )
  unitTypeGroupDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.sortOrder,
      DataDictionary.properties.sortOrder?.metadata.unitType,
    )
  )
  sortOrder: string;  
}
