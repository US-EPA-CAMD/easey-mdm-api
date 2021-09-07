import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SystemTypeCodeDTO } from '../dto/system-type-code.dto';
import { SystemTypeCodeService } from './system-type-code.service';

@ApiTags('System Type Codes')
@Controller()
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
