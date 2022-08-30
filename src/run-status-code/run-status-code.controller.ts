import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { RunStatusCodeService } from './run-status-code.service';


@Controller()
@ApiTags('Run Status Code')
@ApiSecurity('APIKey')
export class RunStatusCodeController {
  constructor(private readonly service: RunStatusCodeService) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrives all Run Status Codes'
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request'
  })
  getRunStatusCodes() {
    return this.service.getRunStatusCodes();
  }
}
