import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WafMethodCodeService } from './waf-method-code.service';
import { WafMethodCodeDTO } from '../dto/waf-method-code.dto';

@ApiTags('WAF Method Codes')
@Controller()
export class WafMethodCodeController {
  constructor(private readonly service: WafMethodCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: WafMethodCodeDTO,
    description: 'Retrieves all unit of measure codes.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getUnitofMeasureCodes(): Promise<WafMethodCodeDTO[]> {
    return this.service.getWafMethodCodes();
  }
}
