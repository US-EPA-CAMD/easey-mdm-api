import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('bypass-approach-codes')
export class BypassApproachCodesController {
  @Get()
  @ApiOkResponse({
    description: 'Retrieves all Bypass-Approach Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getAllBypassApproachCodes() {}
}
