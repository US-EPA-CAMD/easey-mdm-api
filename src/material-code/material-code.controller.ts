import { Controller, Get } from '@nestjs/common';
import { ApiBadGatewayResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MaterialCodeDTO } from '../dto/material-code.dto';
import { MaterialCodeService } from './material-code.service';

@ApiTags('Material Codes')
@Controller()
export class MaterialCodeController {
  constructor(private readonly service: MaterialCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: MaterialCodeDTO,
    description: 'Retrieves all Material Codes',
  })
  @ApiBadGatewayResponse({
    description: 'Invalid Request',
  })
  getMaterialCodes() {
    return this.service.getMaterialCodes();
  }
}
