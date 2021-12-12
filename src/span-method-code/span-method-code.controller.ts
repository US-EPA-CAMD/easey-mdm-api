import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { SpanMethodCodeDTO } from '../dto/span-method-code.dto';
import { SpanMethodCodeService } from './span-method-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Span Method Codes')
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
