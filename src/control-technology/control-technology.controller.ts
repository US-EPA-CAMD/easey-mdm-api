import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologyService } from './control-technology.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Control Codes')
export class ControlTechnologyController {
  constructor(
    private readonly service: ControlTechnologyService,
  ) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ControlTechnologyDTO,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns list of Control codes & descriptions."
  })
  getControlTechnologies(): Promise<ControlTechnologyDTO[]> {
    return this.service.getControlTechnologies();
  }
}
