import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { Get, Controller } from '@nestjs/common';

import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodService } from './reporting-period.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Reporting Periods')
export class ReportingPeriodController {
  constructor(
    private readonly service: ReportingPeriodService
  ) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ReportingPeriodDTO,
    description: 'Returns a list of Reporting Periods',
  })
  getReportingPeriods(): Promise<ReportingPeriodDTO[]> {
    return this.service.getReportingPeriods();
  }
}
