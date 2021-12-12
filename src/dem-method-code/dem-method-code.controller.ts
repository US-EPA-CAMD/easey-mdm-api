import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { DemMethodCodeDTO } from '../dto/dem-method-code.dto';
import { DemMethodCodeService } from './dem-method-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Demonstration Method Codes')
export class DemMethodCodeController {
  constructor(private readonly service: DemMethodCodeService) {}

  @Get()
  @ApiOkResponse({
    type: DemMethodCodeDTO,
    description: 'Retrieve all Demonstration Method Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getDemMethodCodes(): Promise<DemMethodCodeDTO[]> {
    return this.service.getDemMethodCodes();
  }
}
