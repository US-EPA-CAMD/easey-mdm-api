import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { MatsMethodParamCodeDTO } from '../dto/mats-method-param-code.dto';
import { MatsMethodParamCodeService } from './mats-method-param-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('MATS Method Parameter Codes')
export class MatsMethodParamCodeController {
  constructor(private readonly service: MatsMethodParamCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: MatsMethodParamCodeDTO,
    description: 'Retrieves all Method Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getMethodCodes(): Promise<MatsMethodParamCodeDTO[]> {
    return this.service.getMatsMethodParamCodes();
  }
}
