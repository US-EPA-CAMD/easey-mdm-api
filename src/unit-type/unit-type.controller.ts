import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation, getSchemaPath, ApiExtraModels,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { UnitTypeDTO } from '../dto/unit-type.dto';
import { UnitTypeService } from './unit-type.service';
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Unit Type Codes')
@ApiExtraModels(UnitTypeDTO)
export class UnitTypeController {
  constructor(
    private readonly service: UnitTypeService
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
              items: { $ref: getSchemaPath(UnitTypeDTO)},
            }
          },
        },
      },
    },
  })
  @ApiOperation({
    description: "Returns a list of Unit Type codes & descriptions."
  })
  async getUnitTypeCodes(): Promise<ArrayResponse<UnitTypeDTO>> {
    const unitTypeDTOS = await this.service.getUnitTypeCodes();

    return  {
      items: unitTypeDTOS
    };
  }
}
