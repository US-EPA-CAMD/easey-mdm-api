import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { SpanScaleCodeDTO } from '../dto/span-scale-code.dto';
import { SpanScaleCodeService } from './span-scale-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Span Scale Codes')
export class SpanScaleCodeController {
  constructor(private readonly service: SpanScaleCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: SpanScaleCodeDTO,
    description: 'Retrieves all span scale codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getSpanScaleCodes(): Promise<SpanScaleCodeDTO[]> {
    return this.service.getSpanScaleCodes();
  }
}
