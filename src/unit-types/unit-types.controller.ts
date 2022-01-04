import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiSecurity,
  ApiExtraModels,
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
    type: UnitTypeDTO,
    description: 'Retrieved All Valid Unit Types',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  @ApiExtraModels(UnitTypeDTO)
  getAllUnitTypes(): Promise<UnitTypeDTO[]> {
    return this.unitTypesService.getAllUnitTypes();
  }
}
