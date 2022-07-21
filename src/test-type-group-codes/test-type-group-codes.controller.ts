import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { TestTypeGroupCodeDTO } from '../dto/test-type-group-code.dto';
import { TestTypeGroupCodesService } from './test-type-group-codes.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Test Type Group Codes')
export class TestTypeGroupCodesController {
  constructor(private readonly service: TestTypeGroupCodesService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: TestTypeGroupCodeDTO,
    description: 'Retrieves all valid Test Type Group Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getTestTypeCodes(): Promise<TestTypeGroupCodeDTO[]> {
    return this.service.getTestTypeGroupCodes();
  }
}
