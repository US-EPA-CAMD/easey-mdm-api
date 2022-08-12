import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { ApsCodeDTO } from '../dto/aps-code.dto';
import { ApsCodeService } from './aps-code.service';

@Controller()
@ApiTags('APS Codes')
@ApiSecurity('APIKey')
export class ApsCodeController {
  constructor(private readonly service: ApsCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ApsCodeDTO,
    description: 'Retrieves all APS Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getApsCodes(): Promise<ApsCodeDTO[]> {
    return this.service.getApsCodes();
  }
}
