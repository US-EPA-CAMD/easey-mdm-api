import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { DefaultSourceCodeDTO } from '../dto/default-source-code.dto';
import { DefaultSourceCodeService } from './default-source-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Default Source Codes')
export class DefaultSourceCodeController {
  constructor(private readonly service: DefaultSourceCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: DefaultSourceCodeDTO,
    description: 'Retrieves all default source codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getDefaultSourceCodes(): Promise<DefaultSourceCodeDTO[]> {
    return this.service.getDefaultSourceCodes();
  }
}
