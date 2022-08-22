import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ReferenceMethodCodeDTO } from '../dto/reference-method-code.dto';
import { ReferenceMethodCodeService } from './reference-method-code.service';

@ApiTags('Reference Method Codes')
@ApiSecurity('APIKey')
@Controller()
export class ReferenceMethodCodeController {
  constructor(private readonly service: ReferenceMethodCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: ReferenceMethodCodeDTO,
    description: 'Retrieves all Reference Method Codes',
  })
  getReferenceMethodCodes(): Promise<ReferenceMethodCodeDTO[]> {
    return this.service.getReferenceMethodCodes();
  }
}
