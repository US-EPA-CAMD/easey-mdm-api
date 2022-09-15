import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { ProbeTypeCodeService } from './probe-type-code.service';
import { ProbeTypeCodeDTO } from '../dto/probe-type-code.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Qualification Type Codes')
export class ProbeTypeCodeController {
  constructor(private readonly service: ProbeTypeCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ProbeTypeCodeDTO,
    description: 'Retrieves all probe type codes.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getProbeTypeCodes(): Promise<ProbeTypeCodeDTO[]> {
    return this.service.getProbeTypeCodes();
  }
}