import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { TestResultCodeDTO } from '../dto/test-result-code.dto';
import { TestResultCode } from '../entities/test-result-code.entity';

@Injectable()
export class TestResultCodeMap extends BaseMap<
  TestResultCode,
  TestResultCodeDTO
> {
  async one(entity: TestResultCode): Promise<TestResultCodeDTO> {
    return {
      testResultCode: entity.testResultCode,
      testResultCodeDescription: entity.testResultCodeDescription,
    };
  }
}
