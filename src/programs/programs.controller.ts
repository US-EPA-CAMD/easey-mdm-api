import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';

import { ProgramsService } from './programs.service';
import { ProgramDTO } from '../dto/program.dto';
import { ProgramParamsDTO } from '../dto/program.params.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Get()
  @ApiOkResponse({
    description: 'Retrieved ALL Valid Programs',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  @ApiNotFoundResponse({
    description: 'Resource Not Found',
  })
  @ApiQuery({
    style: 'pipeDelimited',
    name: 'exclude',
    required: false,
    explode: false,
  })
  getAllPrograms(
    @Query() programParamsDTO: ProgramParamsDTO,
  ): Promise<ProgramDTO[]> {
    return this.programsService.getAllPrograms(programParamsDTO);
  }
}
