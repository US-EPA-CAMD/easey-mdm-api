import { Controller, Get } from '@nestjs/common';
import { ApiBadGatewayResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ShapeCodeDTO } from '../dto/shape-code.dto';
import { ShapeCodeService } from './shape-code.service';

@ApiTags('Shape Codes')
@Controller()
export class ShapeCodeController {
  constructor(private readonly service: ShapeCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ShapeCodeDTO,
    description: 'Retrieves all Shape Codes',
  })
  @ApiBadGatewayResponse({
    description: 'Invalid Request',
  })
  getShapeCodes() {
    return this.service.getShapeCodes();
  }
}
