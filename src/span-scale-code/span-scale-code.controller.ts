import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SpanScaleCodeDTO } from '../dto/span-scale-code.dto';
import { SpanScaleCodeService } from './span-scale-code.service';

@ApiTags('Span Scale Codes')
@Controller()
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
