import { ApiProperty } from '@nestjs/swagger';
import { DataDictionary  } from '@us-epa-camd/easey-common/data-dictionary';

export class ControlTechnologyDTO {
  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.controlCode,
      DataDictionary.properties.controlCode?.metadata.controlTechnology,
    )
  )
  controlCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.controlDescription,
      DataDictionary.properties.controlDescription?.metadata.controlTechnology,
    )
  )
  controlDescription: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.controlEquipParamCode,
      DataDictionary.properties.controlEquipParamCode?.metadata.controlTechnology,
    )
  )
  controlEquipParamCode: string;

  @ApiProperty(
    DataDictionary.getMetadata(
      DataDictionary.properties.controlEquipParamDescription,
      DataDictionary.properties.controlEquipParamDescription?.metadata.controlTechnology,
    )
  )
  controlEquipParamDescription: string;
}
