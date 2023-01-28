import { ApiProperty } from '@nestjs/swagger';
import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

export class ProgramDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.CODE,
      OverrideKeys.PROGRAM,
  ))
  programCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.DESCRIPTION,
      OverrideKeys.PROGRAM,
  ))
  programDescription: string;

  @ApiProperty()
  compParameter: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.GROUP_CODE,
      OverrideKeys.PROGRAM,
  ))
  programGroupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.GROUP_DESCRIPTION,
      OverrideKeys.PROGRAM,
  ))
  programGroupDescription: string;

  @ApiProperty()
  ozoneIndicator: boolean;

  @ApiProperty()
  annualIndicator: boolean;

  @ApiProperty()
  emissionsUIFilter: boolean;

  @ApiProperty()
  allowanceUIFilter: boolean;

  @ApiProperty()
  complianceUIFilter: boolean;

  @ApiProperty()
  retiredIndicator: boolean;

  @ApiProperty(
    DataDictionary.getMetadata(
      PropertyKeys.END_DATE,
      OverrideKeys.PROGRAM,
  ))
  tradingEndDate: string;
}
