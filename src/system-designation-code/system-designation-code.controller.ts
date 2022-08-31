import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { SystemDesignationCodeService } from './system-designation-code.service';
import { SystemDesignationCodeDTO } from '../dto/system-designation-code.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('System Designation Codes')
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
