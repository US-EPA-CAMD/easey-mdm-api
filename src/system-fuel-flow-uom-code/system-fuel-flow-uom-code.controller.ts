import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SystemFuelFlowUOMCodeService } from './system-fuel-flow-uom-code.service';
import { SystemFuelFlowUOMCodeDTO } from '../dto/system-fuel-flow-uom-code.dto';

@ApiTags('System Fuel Flow UOM Codes')
@Controller()
export class SystemFuelFlowUOMCodeController {
  constructor(private readonly service: SystemFuelFlowUOMCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: SystemFuelFlowUOMCodeDTO,
    description: 'Retrieves all System Fuel Flow Units of Measure Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getMethodCodes(): Promise<SystemFuelFlowUOMCodeDTO[]> {
    return this.service.getSystemFuelFlowUOMCodes();
  }
}
