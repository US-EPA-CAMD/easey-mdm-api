import {
  ApiBadRequestResponse,
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

import { FuelTypeDTO } from '../dto/fuel-type.dto';
import { FuelTypesService } from './fuel-type.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Fuel Types')
export class FuelTypeController {
  constructor(private readonly fuelTypesService: FuelTypesService) {}

  @Get()
  @ApiOkResponse({
    type: FuelTypeDTO,
    description: 'Retrieved ALL Valid Fuel Types',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  @ApiExtraModels(FuelTypeDTO)
  getAllFuelTypes(): Promise<FuelTypeDTO[]> {
    return this.fuelTypesService.getAllFuelTypes();
  }
}
