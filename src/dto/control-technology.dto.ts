import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class ControlTechnologyDTO {
  @ApiProperty({
    description: propertyMetadata.controlCode.description,
    example: propertyMetadata.controlCode.example,
  })
  controlCode: string;

  @ApiProperty({
    description: propertyMetadata.controlDescription.description,
    example: propertyMetadata.controlDescription.example,
  })
  controlDescription: string;

  @ApiProperty({
    description: propertyMetadata.controlEquipParamCode.description,
    example: propertyMetadata.controlEquipParamCode.example,
  })
  controlEquipParamCode: string;

  @ApiProperty({
    description: propertyMetadata.controlEquipParamDescription.description,
    example: propertyMetadata.controlEquipParamDescription.example,
  })
  controlEquipParamDescription: string;
}
