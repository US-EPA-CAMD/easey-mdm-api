import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { ControlTechnologyDTO } from '../dto/control-technology.dto';
import { ControlTechnologyService } from './control-technology.service';
import { AccountTypeDTO } from '../dto/account-type.dto';
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';

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
  async getControlTechnologies(): Promise<ArrayResponse<ControlTechnologyDTO>> {
    const controlTechnologies = await this.service.getControlTechnologies();

    return  {
      items: controlTechnologies
    };
  }
}
