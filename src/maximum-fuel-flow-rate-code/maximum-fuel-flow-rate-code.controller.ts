import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MaximumFuelFlowRateCodeService } from './maximum-fuel-flow-rate-code.service';
import { MaximumFuelFlowRateCodeDTO } from '../dto/maximum-fuel-flow-rate-code.dto';

@ApiTags('Maximum Fuel Flow Rate Source Codes')
@Controller()
export class MaximumFuelFlowRateCodeController {
  constructor(private readonly service: MaximumFuelFlowRateCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: MaximumFuelFlowRateCodeDTO,
    description: 'Retrieves all Analyzer Range Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getMaximumFuelFlowRateCodes(): Promise<MaximumFuelFlowRateCodeDTO[]> {
    return this.service.getMaximumFuelFlowRateCodes();
  }
}
