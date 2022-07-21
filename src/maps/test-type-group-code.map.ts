import { Injectable } from '@nestjs/common';
import { BaseMap } from '@us-epa-camd/easey-common/maps';
import { TestTypeGroupCodeDTO } from '../dto/test-type-group-code.dto';
import { TestTypeGroupCode } from '../entities/test-type-group-code.entity';

@Injectable()
export class TestTypeGroupCodeMap extends BaseMap<
  TestTypeGroupCode,
  TestTypeGroupCodeDTO
> {
  public async one(entity: TestTypeGroupCode): Promise<TestTypeGroupCodeDTO> {
    return {
      testTypeGroupCode: entity.testTypeGroupCode,
      testTypeGroupCodeDescription: entity.testTypeGroupCodeDescription,
    };
  }
}
