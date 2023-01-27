import { ApiProperty } from '@nestjs/swagger';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class ProgramDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.programCode,
      DataDictionary.properties.programCode?.metadata.program,
    )
  )
  programCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.programDescription,
      DataDictionary.properties.programDescription?.metadata.program,
    )
  )
  programDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.compParameter,
      DataDictionary.properties.compParameter?.metadata.program,
    )
  )
  compParameter: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.programGroupCode,
      DataDictionary.properties.programGroupCode?.metadata.program,
    )
  )
  programGroupCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.programGroupDescription,
      DataDictionary.properties.programGroupDescription?.metadata.program,
    )
  )
  programGroupDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.ozoneIndicator,
      DataDictionary.properties.ozoneIndicator?.metadata.program,
    )
  )
  ozoneIndicator: boolean;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.annualIndicator,
      DataDictionary.properties.annualIndicator?.metadata.program,
    )
  )
  annualIndicator: boolean;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.emissionsUIFilter,
      DataDictionary.properties.emissionsUIFilter?.metadata.program,
    )
  )
  emissionsUIFilter: boolean;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.allowanceUIFilter,
      DataDictionary.properties.allowanceUIFilter?.metadata.program,
    )
  )
  allowanceUIFilter: boolean;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.complianceUIFilter,
      DataDictionary.properties.complianceUIFilter?.metadata.program,
    )
  )
  complianceUIFilter: boolean;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.retiredIndicator,
      DataDictionary.properties.retiredIndicator?.metadata.program,
    )
  )
  retiredIndicator: boolean;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.tradingEndDate,
      DataDictionary.properties.tradingEndDate?.metadata.program,
    )
  )
  tradingEndDate: string;
}
