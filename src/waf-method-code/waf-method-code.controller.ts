import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { WafMethodCodeService } from './waf-method-code.service';
import { WafMethodCodeDTO } from '../dto/waf-method-code.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('WAF Method Codes')
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
  getWafMethodCodes(): Promise<WafMethodCodeDTO[]> {
    return this.service.getWafMethodCodes();
  }
}
