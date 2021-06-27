import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BypassApproachCodeDTO } from 'src/dto/bypass-approach-code.dto';
import { BypassApproachCodeService } from './bypass-approach-code.service';

@ApiTags('Bypass Approach Codes')
@Controller()
export class BypassApproachCodesController {
  constructor(
    private readonly bypassApproachCodeService: BypassApproachCodeService,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieves all Bypass-Approach Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getAllBypassApproachCodes(): Promise<BypassApproachCodeDTO[]> {
    return this.bypassApproachCodeService.getAllBypassApproachCodes();
  }
}
