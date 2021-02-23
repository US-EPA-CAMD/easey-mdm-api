import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { UnitTypeDTO } from '../dto/unit-type.dto';
import { UnitTypesService } from './unit-types.service';

@ApiTags('Unit Types')
@Controller()
export class UnitTypesController {
  constructor(private unitTypesService: UnitTypesService) {}

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
