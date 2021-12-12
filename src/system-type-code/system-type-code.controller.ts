import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { SystemTypeCodeDTO } from '../dto/system-type-code.dto';
import { SystemTypeCodeService } from './system-type-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('System Type Codes')
export class SystemTypeCodeController {
  constructor(private readonly service: SystemTypeCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: SystemTypeCodeDTO,
    description: 'Retrieves all system type codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getSystemTypeCodes(): Promise<SystemTypeCodeDTO[]> {
    return this.service.getSystemTypeCodes();
  }
}
