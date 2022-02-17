import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiSecurity,
  ApiExtraModels,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { StatesService } from './states.service';
import { StateDTO } from '../dto/state.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('States')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Get()
  @ApiOkResponse({
    type: StateDTO,
    description: 'Retrieved All States',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  @ApiExtraModels(StateDTO)
  getAllStates(): Promise<StateDTO[]> {
    return this.statesService.getAllStates();
  }
}
