import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';

import { MatsMethodCodeDTO } from '../dto/mats-method-code.dto';
import { MatsMethodCodeService } from './mats-method-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('MATS Method Codes')
export class MatsMethodCodeController {
  constructor(private readonly service: MatsMethodCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: MatsMethodCodeDTO,
    description: 'Retrieves all Method Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getMethodCodes() {
    return this.service.getMatsMethodCodes();
  }
}
