import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation, getSchemaPath, ApiExtraModels,
} from '@nestjs/swagger';

import {
  Get,
  Controller,
  Query,
} from '@nestjs/common';

import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodService } from './reporting-period.service';
import { ReportingPeriodParamsDTO } from '../dto/reporting-period.params.dto';
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Reporting Periods')
@ApiExtraModels(ReportingPeriodDTO)
export class ReportingPeriodController {
  constructor(private readonly service: ReportingPeriodService) {}

  @Get()
  @ApiOkResponse({
    description: 'Data retrieved successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            items: {
              type: 'array',
              items: { $ref: getSchemaPath(ReportingPeriodDTO)},
            }
          },
        },
      },
    },
  })
  @ApiOperation({
    description: "Returns a list of Reporting Periods."
  })
  async getReportingPeriods(
    @Query() params: ReportingPeriodParamsDTO,
  ): Promise<ArrayResponse<ReportingPeriodDTO>> {
    const reportingPeriodDTOS = await this.service.getReportingPeriods(
      params.excludeCurrentQuarter,
    );

    return  {
      items: reportingPeriodDTOS
    };
  }
}
