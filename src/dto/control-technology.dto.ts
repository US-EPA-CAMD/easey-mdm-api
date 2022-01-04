import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class ControlTechnologyDTO {
  @ApiProperty({
    description: propertyMetadata.controlCode.description,
    example: propertyMetadata.controlCode.example,
    name: propertyMetadata.controlCode.fieldLabels.value,
  })
  controlCode: string;

  @ApiProperty({
    description: propertyMetadata.controlDescription.description,
    example: propertyMetadata.controlDescription.example,
    name: propertyMetadata.controlDescription.fieldLabels.value,
  })
  controlDescription: string;

  @ApiProperty({
    description: propertyMetadata.controlEquipParamCode.description,
    example: propertyMetadata.controlEquipParamCode.example,
    name: propertyMetadata.controlEquipParamCode.fieldLabels.value,
  })
  controlEquipParamCode: string;

  @ApiProperty({
    description: propertyMetadata.controlEquipParamDescription.description,
    example: propertyMetadata.controlEquipParamDescription.example,
    name: propertyMetadata.controlEquipParamDescription.fieldLabels.value,
  })
  controlEquipParamDescription: string;
}
