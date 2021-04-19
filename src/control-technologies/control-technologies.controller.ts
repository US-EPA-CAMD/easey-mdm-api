import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologiesService } from './control-technologies.service';

@ApiTags('Control Technologies')
@Controller()
export class ControlTechnologiesController {
  constructor(private readonly controlTechnologiesService: ControlTechnologiesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieved All Valid Control Technologies',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  getAllControlTechnologies(): Promise<ControlTechnologyDTO[]> {
    return this.controlTechnologiesService.getAllControlTechnologies();
  }
}
