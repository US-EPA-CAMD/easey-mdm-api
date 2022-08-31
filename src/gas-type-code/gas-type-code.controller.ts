import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { GasTypeCodeDTO } from '../dto/gas-type-code.dto';
import { GasTypeCodeService } from './gas-type-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Gas Type Codes')
export class GasTypeCodeController {
  constructor(private readonly service: GasTypeCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: GasTypeCodeDTO,
    description: 'Retrieves all gas type codes.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getGasTypeCodes(): Promise<GasTypeCodeDTO[]> {
    return this.service.getGasTypeCodes();
  }
}
