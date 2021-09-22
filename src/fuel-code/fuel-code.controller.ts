import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FuelCodeDTO } from '../dto/fuel-code.dto';
import { FuelCodeService } from './fuel-code.service';

@ApiTags('Fuel Codes')
@Controller()
export class FuelCodeController {
  constructor(private readonly service: FuelCodeService) {}

  @Get()
  @ApiOkResponse({
    type: FuelCodeDTO,
    description: 'Retrieves all Fuel Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getFuelCodes(): Promise<FuelCodeDTO[]> {
    return this.service.getFuelCodes();
  }
}
