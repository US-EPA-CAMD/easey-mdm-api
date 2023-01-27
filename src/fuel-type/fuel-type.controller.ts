import {
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

import { FuelTypeDTO } from '../dto/fuel-type.dto';
import { FuelTypeService } from './fuel-type.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Fuel Type Codes')
export class FuelTypeController {
  constructor(
    private readonly service: FuelTypeService
  ) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: FuelTypeDTO,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Fuel Type codes & descriptions."
  })
  getFuelTypeCodes(): Promise<FuelTypeDTO[]> {
    return this.service.getFuelTypeCodes();
  }
}
