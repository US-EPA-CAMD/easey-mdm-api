import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags, getSchemaPath,
} from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

import { FuelTypeDTO } from '../dto/fuel-type.dto';
import { FuelTypeService } from './fuel-type.service';
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Fuel Type Codes')
@ApiExtraModels(FuelTypeDTO)
export class FuelTypeController {
  constructor(
    private readonly service: FuelTypeService
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
              items: { $ref: getSchemaPath(FuelTypeDTO)},
            }
          },
        },
      },
    },
  })
  @ApiOperation({
    description: "Returns a list of Fuel Type codes & descriptions."
  })
  async getFuelTypeCodes(): Promise<ArrayResponse<FuelTypeDTO>> {
    const fuelTypeDTOS = await this.service.getFuelTypeCodes();

    return  {
      items: fuelTypeDTOS
    };
  }
}
