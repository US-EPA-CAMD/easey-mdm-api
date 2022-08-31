import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { GasLevelCodeDTO } from '../dto/gas-level-code.dto';
import { GasLevelCodeService } from './gas-level-code.service';

@ApiTags('Gas Level Codes')
@ApiSecurity('APIKey')
@Controller()
export class GasLevelCodeController {
  constructor(private readonly service: GasLevelCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: GasLevelCodeDTO,
    description: 'Retrieves all Gas Level Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getGasLevelCodes(): Promise<GasLevelCodeDTO[]> {
    return this.service.getGasLevelCodes();
  }
}
