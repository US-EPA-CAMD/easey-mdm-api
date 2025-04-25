import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { UnitTypeDTO } from '../dto/unit-type.dto';
import { UnitTypeService } from './unit-type.service';
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';
import { ProgramDTO } from '../dto/program.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Unit Type Codes')
export class UnitTypeController {
  constructor(
    private readonly service: UnitTypeService
  ) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: UnitTypeDTO,
    description: 'Data retrieved successfully',
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
