import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { TestClaimCodeService } from './test-claim-code.service';
import { TestClaimCodeDTO } from '../dto/test-claim-code.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Test Claim Codes')
export class TestClaimCodeController {
  constructor(private readonly service: TestClaimCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: TestClaimCodeDTO,
    description: 'Retrieves all test claim codes.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getTestClaimCodes(): Promise<TestClaimCodeDTO[]> {
    return this.service.getTestClaimCodes();
  }
}