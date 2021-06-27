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
  getAllBypassApproachCodes(): Promise<BypassApproachCodeDTO[]> {
    return this.service.getAllBypassApproachCodes();
  }

  @Put('/:id')
  @ApiOkResponse({
    type: BypassApproachCodeDTO,
    description: 'Updates Bypass-Approach Code',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  updateBypassApproachCode(
    @Param('id') id: string,
    @Body() payload: BypassApproachCodeDTO,
  ): Promise<BypassApproachCodeDTO> {
    return this.service.updateBypassApproachCode(id, payload);
  }
}
