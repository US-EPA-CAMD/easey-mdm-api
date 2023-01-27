import { ApiProperty } from '@nestjs/swagger';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class FuelTypeDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.fuelTypeCode,
      DataDictionary.properties.fuelTypeCode?.metadata.fuelType,
    )
  )
  fuelTypeCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.fuelTypeDescription,
      DataDictionary.properties.fuelTypeDescription?.metadata.fuelType,
    )
  )
  fuelTypeDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.fuelGroupCode,
      DataDictionary.properties.fuelGroupCode?.metadata.fuelType,
    )
  )
  fuelGroupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.fuelGroupDescription,
      DataDictionary.properties.fuelGroupDescription?.metadata.fuelType,
    )
  )
  fuelGroupDescription: string;
}
