import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UnitsOfMeasureCodeService } from './units-of-measure-code.service';
import { UnitsOfMeasureCodeDTO } from '../dto/units-of-measure-code.dto';

@ApiTags('Units of Measure Codes')
@Controller()
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
  getMethodCodes(): Promise<UnitsOfMeasureCodeDTO[]> {
    return this.service.getUnitsOfMeasureCodes();
  }
}
