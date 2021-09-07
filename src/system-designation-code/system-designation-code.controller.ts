import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SystemDesignationCodeService } from './system-designation-code.service';
import { SystemDesignationCodeDTO } from '../dto/system-designation-code.dto';

@ApiTags('System Designation Codes')
@Controller()
export class SystemDesignationCodeController {
  constructor(private readonly service: SystemDesignationCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: SystemDesignationCodeDTO,
    description: 'Retrieves all system designation codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getSystemDesignationCodes(): Promise<SystemDesignationCodeDTO[]> {
    return this.service.getSystemDesignationCodes();
  }
}
