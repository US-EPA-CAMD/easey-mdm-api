import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { Get, Controller, Query } from '@nestjs/common';

import { ParameterMethodSubDataDTO } from './../dto/parameter-method-subdata.dto';
import { CrossChecksService } from './cross-checks.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Cross Checks')
export class CrossChecksController {
  constructor(private readonly crossChecksService: CrossChecksService) {}

  @Get('parameter-method-subdata')
  @ApiOkResponse({
    description: 'Retrieves the parameter codes, method codes, & substitute data codes cross relationship',
  })
  getParameterMethodSubDataRelationships(
    @Query('methodCode') methodCode: string,
    @Query('parameterCode') parameterCode: string,
    @Query('substituteDataCode') substituteDataCode: string,
  ): Promise<ParameterMethodSubDataDTO[]> {
    return this.crossChecksService.getParameterMethodSubDataRelationships(
      methodCode,
      parameterCode,
      substituteDataCode,
    );
  }
}
