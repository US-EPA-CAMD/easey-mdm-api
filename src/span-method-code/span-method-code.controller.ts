import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SpanMethodCodeDTO } from '../dto/span-method-code.dto';
import { SpanMethodCodeService } from './span-method-code.service';

@ApiTags('Span Method Codes')
@Controller()
export class SpanMethodCodeController {
  constructor(private readonly service: SpanMethodCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: SpanMethodCodeDTO,
    description: 'Retrieves all span method codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getSpanMethodCodes(): Promise<SpanMethodCodeDTO[]> {
    return this.service.getSpanMethodCodes();
  }
}
