import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { TestResultCodeDTO } from '../dto/test-result-code.dto';
import { TestResultCodeService } from './test-result-code.service';

@Controller()
@ApiTags('Test Result Codes')
@ApiSecurity('APIKey')
export class TestResultCodeController {
  constructor(private readonly service: TestResultCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: TestResultCodeDTO,
    description: 'Retrieves all Test Result Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getTestResultCodes() {
    return this.service.getTestResultCodes();
  }
}
