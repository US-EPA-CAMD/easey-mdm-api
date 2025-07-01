import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation, ApiExtraModels, getSchemaPath,
} from '@nestjs/swagger';
import { Get, Controller, Query } from '@nestjs/common';

import { ProgramDTO } from '../dto/program.dto';
import { ProgramService } from './program.service';
import { ProgramParamsDTO } from '../dto/program.params.dto';
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Program Codes')
@ApiExtraModels(ProgramDTO)
export class ProgramController {
  constructor(private readonly service: ProgramService) {}

  @Get()
  @ApiOkResponse({
    description: 'Data retrieved successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            items: {
              type: 'array',
              items: { $ref: getSchemaPath(ProgramDTO)},
            }
          },
        },
      },
    },
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
