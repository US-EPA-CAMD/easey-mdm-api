import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { PressureMeasureCodeDTO } from '../dto/pressure-measure-code.dto';
import { PressureMeasureCodeService } from './pressure-measure-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Pressure Measure Codes')
export class PressureMeasureCodeController {
  constructor(private readonly service: PressureMeasureCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: PressureMeasureCodeDTO,
    description: 'Retrieves all pressure measure codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getPressureMeasureCodes(): Promise<PressureMeasureCodeDTO[]> {
    return this.service.getPressureMeasureCodes();
  }
}
