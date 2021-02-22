import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { UnitTypeCodeDTO } from '../dto/unit-type-code.dto';
import { UnitTypeCodeService } from './unit-type-code.service';

@ApiTags('Unit Type Code')
@Controller()
export class UnitTypeCodeController {
  constructor(private unitTypeCodeService: UnitTypeCodeService) {}

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
  getAllUnitTypes(): Promise<UnitTypeCodeDTO[]> {
    return this.unitTypeCodeService.getAllUnitTypes();
  }
}
