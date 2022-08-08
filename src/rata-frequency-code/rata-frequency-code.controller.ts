import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { RataFrequencyCodeDTO } from '../dto/rata-frequency-code.dto';
import { RataFrequencyCodeService } from './rata-frequency-code.service';

@Controller()
@ApiTags('Rata Frequency Codes')
@ApiSecurity('APIKey')
export class RataFrequencyCodeController {
  constructor(private readonly service: RataFrequencyCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: RataFrequencyCodeDTO,
    description: 'Retrieves all RATA frequency Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getRataFrequencyCodes() {
    return this.service.getRataFrequencyCodes();
  }
}
