import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AnalyzerRangeCodeService } from './analyzer-range-code.service';
import { AnalyzerRangeCodeDTO } from '../dto/analyzer-range.dto';

@ApiTags('Analyzer Range Codes')
@Controller()
export class AnalyzerRangeCodeController {
  constructor(private readonly service: AnalyzerRangeCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: AnalyzerRangeCodeDTO,
    description: 'Retrieves all Analyzer Range Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getAnalyzerRangeCodes(): Promise<AnalyzerRangeCodeDTO[]> {
    return this.service.getAnalyzerRangeCodes();
  }
}
