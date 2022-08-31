import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { FuelIndicatorCodeDTO } from '../dto/fuel-indicator-code.dto';
import { FuelIndicatorCodeService } from './fuel-indicator-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Fuel Indicator Codes')
export class FuelIndicatorCodeController {
  constructor(private readonly service: FuelIndicatorCodeService) {}

  @Get()
  @ApiOkResponse({
    type: FuelIndicatorCodeDTO,
    description: 'Retrieves all Fuel Indicator Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getFuelIndicatorCodes(): Promise<FuelIndicatorCodeDTO[]> {
    return this.service.getFuelIndicatorCodes();
  }
}
