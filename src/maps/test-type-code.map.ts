import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';

import { TestTypeCodeDTO } from '../dto/test-type-code.dto';
import { TestTypeCode } from '../entities/test-type-code.entity';

@Injectable()
export class TestTypeCodeMap extends BaseMap<TestTypeCode, TestTypeCodeDTO> {
  public async one(entity: TestTypeCode): Promise<TestTypeCodeDTO> {
    return {
      testTypeCode: entity.testTypeCode,
      testTypeCodeDescription: entity.testTypeCodeDescription,
      groupCode: entity.groupCode,
    };
  }
}
