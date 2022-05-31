import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { TestReasonCodeDTO } from '../dto/test-reason-code.dto';
import { TestReasonCode } from '../entities/test-reason-code.entity';

@Injectable()
export class TestReasonCodeMap extends BaseMap<
  TestReasonCode,
  TestReasonCodeDTO
> {
  public async one(entity: TestReasonCode): Promise<TestReasonCodeDTO> {
    return {
      testReasonCode: entity.testReasonCode,
      testReasonCodeDescription: entity.testReasonCodeDescription,
    };
  }
}
