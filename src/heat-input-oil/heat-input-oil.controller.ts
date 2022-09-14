import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { HeatInputOilDTO } from '../dto/heat-input-oil.dto';
import { HeatInputOilService } from './heat-input-oil.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Heat Input Oil')
export class HeatInputOilController {
  constructor(private readonly service: HeatInputOilService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: HeatInputOilDTO,
    description: 'Retrieves all oil heat input information',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getHeatInputOils(): Promise<HeatInputOilDTO[]> {
    return this.service.getHeatInputOils();
  }
}
