import {
  ApiOkResponse,
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
    description: 'Returns a list of Fuel Type Codes',
  })
  getFuelTypeCodes(): Promise<FuelTypeDTO[]> {
    return this.service.getFuelTypeCodes();
  }
}
