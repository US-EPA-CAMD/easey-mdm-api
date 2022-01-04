import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiSecurity,
  ApiExtraModels,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologiesService } from './control-technologies.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Control Technologies')
export class ControlTechnologiesController {
  constructor(
    private readonly controlTechnologiesService: ControlTechnologiesService,
  ) {}

  @Get()
  @ApiOkResponse({
    type: ControlTechnologyDTO,
    description: 'Retrieved All Valid Control Technologies',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  @ApiExtraModels(ControlTechnologyDTO)
  getAllControlTechnologies(): Promise<ControlTechnologyDTO[]> {
    return this.controlTechnologiesService.getAllControlTechnologies();
  }
}
