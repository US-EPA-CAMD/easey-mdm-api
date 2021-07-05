import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ParameterCodeDTO } from '../dto/parameter-code.dto';
import { ParameterCodeService } from './parameter-code.service';

@ApiTags('Parameter Codes')
@Controller()
export class ParameterCodeController {
  constructor(private readonly parameterCodeService: ParameterCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ParameterCodeDTO,
    description: 'Retrieves all Parametet Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getParameterCodes(): Promise<ParameterCodeDTO[]> {
    return this.parameterCodeService.getParameterCodes();
  }
}
