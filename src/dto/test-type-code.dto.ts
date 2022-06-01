import { ApiProperty } from '@nestjs/swagger';
import { propertyMetadata } from '@us-epa-camd/easey-common/constants';

export class TestTypeCodeDTO {
  testTypeCode: string;
  testTypeCodeDescription: string;
}
