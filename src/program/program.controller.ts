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
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';
import { FuelTypeDTO } from '../dto/fuel-type.dto';

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
  async getProgramCodes(@Query() params: ProgramParamsDTO): Promise<ArrayResponse<ProgramDTO>> {
    const programDTOS = await this.service.getProgramCodes(params);

    return  {
      items: programDTOS
    };
  }
}
