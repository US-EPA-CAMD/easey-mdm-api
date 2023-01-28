import { ApiProperty } from '@nestjs/swagger';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

export class ControlTechnologyDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.CODE,
      OverrideKeys.CONTROL_TECH,
  ))
  controlCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DESCRIPTION,
      OverrideKeys.CONTROL_TECH,
  ))
  controlDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.CODE,
      OverrideKeys.CE_PARAM,
  ))
  controlEquipParamCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DESCRIPTION,
      OverrideKeys.CE_PARAM,
  ))
  controlEquipParamDescription: string;
}
