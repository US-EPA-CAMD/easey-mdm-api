import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { StatesService } from './states.service';
import { StateDTO } from '../dto/state.dto';

@ApiTags('States')
@Controller()
export class StatesController {
  constructor(private statesService: StatesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieved All States',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  getAllStates(): Promise<StateDTO[]> {
    return this.statesService.getAllStates();
  }
}
