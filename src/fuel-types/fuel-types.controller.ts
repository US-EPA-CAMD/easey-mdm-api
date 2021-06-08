import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

import { FuelTypeDTO } from '../dto/fuel-type.dto';
import { FuelTypesService } from './fuel-types.service';

@ApiTags('Fuel Types')
@Controller()
export class FuelTypesController {
  constructor(private readonly fuelTypesService: FuelTypesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieved ALL Valid Fuel Types',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  getAllFuelTypes(): Promise<FuelTypeDTO[]> {
    return this.fuelTypesService.getAllFuelTypes();
  }
}
