import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UnitsOfMeasureCodeService } from './units-of-measure-code.service';
import { UnitsOfMeasureCodeDTO } from '../dto/units-of-measure-code.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Units of Measure Codes')
export class UnitsOfMeasureCodeController {
  constructor(private readonly service: UnitsOfMeasureCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: UnitsOfMeasureCodeDTO,
    description: 'Retrieves all unit of measure codes.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getUnitofMeasureCodes(): Promise<UnitsOfMeasureCodeDTO[]> {
    return this.service.getUnitsOfMeasureCodes();
  }
}
