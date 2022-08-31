import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiTags,
  ApiSecurity,
} from '@nestjs/swagger';
import { BypassApproachCodeDTO } from '../dto/bypass-approach-code.dto';
import { BypassApproachCodeService } from './bypass-approach-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Bypass Approach Codes')
export class BypassApproachCodesController {
  constructor(private readonly service: BypassApproachCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: BypassApproachCodeDTO,
    description: 'Retrieves all Bypass-Approach Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getBypassApproachCodes(): Promise<BypassApproachCodeDTO[]> {
    return this.service.getBypassApproachCodes();
  }
}
