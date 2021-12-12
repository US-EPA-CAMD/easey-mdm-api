import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { EquationCodeDTO } from '../dto/equation-code.dto';
import { EquationCodeService } from './equation-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Equation Codes')
export class EquationCodeController {
  constructor(private readonly service: EquationCodeService) {}

  @Get()
  @ApiOkResponse({
    type: EquationCodeDTO,
    description: 'Retrieves all Equation Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getEquationCodes(): Promise<EquationCodeDTO[]> {
    return this.service.getEquationCodes();
  }
}
