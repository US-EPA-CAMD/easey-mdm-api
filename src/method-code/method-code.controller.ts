import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { MethodCodeDTO } from '../dto/method-code.dto';
import { MethodCodeService } from './method-code.service';

@ApiTags('Method Codes')
@Controller()
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
