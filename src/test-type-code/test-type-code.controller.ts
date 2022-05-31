import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { TestTypeCodeDTO } from '../dto/test-type-code.dto';
import { TestTypeCodeService } from './test-type-code.service';

@Controller()
export class TestTypeCodeController {
  constructor(private readonly service: TestTypeCodeService) {}

  @Get()
  @ApiSecurity('APIKey')
  @ApiOkResponse({
    isArray: true,
    type: TestTypeCodeDTO,
    description: 'Retrieves all valid Test Type Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getTestTypeCodes(): Promise<TestTypeCodeDTO[]> {
    return this.service.getTestTypeCodes();
  }
}
