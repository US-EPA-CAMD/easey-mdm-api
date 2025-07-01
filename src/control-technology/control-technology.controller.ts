import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation, getSchemaPath, ApiExtraModels,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologyService } from './control-technology.service';
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Control Codes')
@ApiExtraModels(ControlTechnologyDTO)
export class ControlTechnologyController {
  constructor(
    private readonly service: ControlTechnologyService,
  ) {}

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
              items: { $ref: getSchemaPath(ControlTechnologyDTO)},
            }
          },
        },
      },
    },
  })
  @ApiOperation({
    description: "Returns list of Control codes & descriptions."
  })
  async getControlTechnologies(): Promise<ArrayResponse<ControlTechnologyDTO>> {
    const controlTechnologies = await this.service.getControlTechnologies();

    return  {
      items: controlTechnologies
    };
  }
}
