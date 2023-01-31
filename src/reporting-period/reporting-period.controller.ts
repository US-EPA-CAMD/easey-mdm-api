import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation,
} from '@nestjs/swagger';

import {
  Get,
  Controller,
  Query,
} from '@nestjs/common';

import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodService } from './reporting-period.service';
import { ReportingPeriodParamsDTO } from '../dto/reporting-period.params.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Reporting Periods')
export class ReportingPeriodController {
  constructor(private readonly service: ReportingPeriodService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ReportingPeriodDTO,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Reporting Periods."
  })
  getReportingPeriods(
    @Query() params: ReportingPeriodParamsDTO,
  ): Promise<ReportingPeriodDTO[]> {
    return this.service.getReportingPeriods(params.export);
  }
}
