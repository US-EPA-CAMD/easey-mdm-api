import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { UnitTypeDTO } from '../dto/unit-type.dto';
import { UnitTypeService } from './unit-type.service';

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
  getUnitTypeCodes(): Promise<UnitTypeDTO[]> {
    return this.service.getUnitTypeCodes();
  }
}
