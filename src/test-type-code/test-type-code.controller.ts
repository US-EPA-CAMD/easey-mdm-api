import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { TestTypeCodeDTO } from '../dto/test-type-code.dto';
import { TestTypeCodeService } from './test-type-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Test Type Codes')
export class TestTypeCodeController {
  constructor(private readonly service: TestTypeCodeService) {}

  @Get()
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
