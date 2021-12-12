import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { UnitTypeDTO } from '../dto/unit-type.dto';
import { UnitTypesService } from './unit-types.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Unit Types')
export class UnitTypesController {
  constructor(private readonly unitTypesService: UnitTypesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieved All Valid Unit Types',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  getAllUnitTypes(): Promise<UnitTypeDTO[]> {
    return this.unitTypesService.getAllUnitTypes();
  }
}
