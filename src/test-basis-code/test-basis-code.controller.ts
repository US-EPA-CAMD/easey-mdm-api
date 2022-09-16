import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { TestBasisCodeDTO } from '../dto/test-basis-code.dto';
import { TestBasisCodeService } from './test-basis-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Test Basis Codes')
export class TestBasisCodeController {
  constructor(private readonly service: TestBasisCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: TestBasisCodeDTO,
    description: 'Retrieves all test basis codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getTestBasisCodes(): Promise<TestBasisCodeDTO[]> {
    return this.service.getTestBasisCodes();
  }
}
