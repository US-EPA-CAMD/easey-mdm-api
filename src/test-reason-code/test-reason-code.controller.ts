import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { TestReasonCodeDTO } from '../dto/test-reason-code.dto';
import { TestReasonCodeService } from './test-reason-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Test Reason Codes')
export class TestReasonCodeController {
  constructor(private readonly service: TestReasonCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: TestReasonCodeDTO,
    description: 'Retrieves all test reason type codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getTestReasonCodes(): Promise<TestReasonCodeDTO[]> {
    return this.service.getTestReasonCodes();
  }
}
