import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DemMethodCodeDTO } from '../dto/dem-method-code.dto';
import { DemMethodCodeService } from './dem-method-code.service';

@ApiTags('Demonstration Method Codes')
@Controller()
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
