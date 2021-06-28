import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BypassApproachCodeDTO } from 'src/dto/bypass-approach-code.dto';
import { BypassApproachCodeService } from './bypass-approach-code.service';

@ApiTags('Bypass Approach Codes')
@Controller()
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
