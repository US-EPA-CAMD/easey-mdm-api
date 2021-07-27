import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { MatsMethodCodeDTO } from '../dto/mats-method-code.dto';
import { MatsMethodCodeService } from './mats-method-code.service';

@ApiTags('MATS Method Codes')
@Controller()
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
