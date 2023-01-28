import { ApiProperty } from '@nestjs/swagger';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

export class FuelTypeDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.CODE,
      OverrideKeys.FUEL_TYPE,
  ))
  fuelTypeCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DESCRIPTION,
      OverrideKeys.FUEL_TYPE,
  ))
  fuelTypeDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.GROUP_CODE,
      OverrideKeys.FUEL_TYPE,
  ))
  fuelGroupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.GROUP_DESCRIPTION,
      OverrideKeys.FUEL_TYPE,
  ))
  fuelGroupDescription: string;
}
