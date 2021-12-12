import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { DefaultPurposeCodeDTO } from '../dto/default-purpose-code.dto';
import { DefaultPurposeCodeService } from './default-purpose-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Default Purpose Codes')
export class DefaultPurposeCodeController {
  constructor(private readonly service: DefaultPurposeCodeService) {}

  @Get()
  @ApiOkResponse({
    type: DefaultPurposeCodeDTO,
    description: 'Retrieves all Default Purpose Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getDefaultPurposeCodes(): Promise<DefaultPurposeCodeDTO[]> {
    return this.service.getDefaultPurposeCodes();
  }
}
