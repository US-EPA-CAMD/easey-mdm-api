import { Controller, Get } from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { ShapeCodeDTO } from '../dto/shape-code.dto';
import { ShapeCodeService } from './shape-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Shape Codes')
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
