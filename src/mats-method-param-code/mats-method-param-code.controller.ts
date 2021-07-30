import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MatsMethodParamCodeDTO } from '../dto/mats-method-param-code.dto';
import { MatsMethodParamCodeService } from './mats-method-param-code.service';

@ApiTags('MATS Method Parameter Codes')
@Controller()
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
