import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologyService } from './control-technology.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Control Technologies')
export class ControlTechnologyController {
  constructor(
    private readonly service: ControlTechnologyService,
  ) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ControlTechnologyDTO,
    description: 'Returns list of Control Technologies',
  })
  getControlTechnologies(): Promise<ControlTechnologyDTO[]> {
    return this.service.getControlTechnologies();
  }
}
