import { Controller, Get } from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodService } from './reporting-period.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Reporting Periods')
export class ReportingPeriodController {
  constructor(private readonly service: ReportingPeriodService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ReportingPeriodDTO,
    description: 'Retrieves all Reporting Periods',
  })
  @ApiBadGatewayResponse({
    description: 'Invalid Request',
  })
  getReportingPeriods(): Promise<ReportingPeriodDTO[]> {
    return this.service.getReportingPeriods();
  }
}
