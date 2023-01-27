import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation,
} from '@nestjs/swagger';
import { Get, Controller, Query } from '@nestjs/common';

import { ProgramDTO } from '../dto/program.dto';
import { ProgramService } from './program.service';
import { ProgramParamsDTO } from '../dto/program.params.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Program Codes')
export class ProgramController {
  constructor(private readonly service: ProgramService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ProgramDTO,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Program codes & descriptions."
  })
  getProgramCodes(@Query() params: ProgramParamsDTO): Promise<ProgramDTO[]> {
    return this.service.getProgramCodes(params);
  }
}
