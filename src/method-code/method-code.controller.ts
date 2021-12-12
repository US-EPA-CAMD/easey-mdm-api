import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';

import { MethodCodeDTO } from '../dto/method-code.dto';
import { MethodCodeService } from './method-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Method Codes')
export class MethodCodeController {
  constructor(private readonly methodCodeService: MethodCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: MethodCodeDTO,
    description: 'Retrieves all Method Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getMethodCodes() {
    return this.methodCodeService.getMethodCodes();
  }
}
