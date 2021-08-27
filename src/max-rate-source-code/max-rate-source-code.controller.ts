import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MaxRateSourceCodeService } from './max-rate-source-code.service';
import { MaxRateSourceCodeDTO } from '../dto/max-rate-source-code.dto';

@ApiTags('Max Rate Source Codes')
@Controller()
export class MaxRateSourceCodeController {
  constructor(private readonly service: MaxRateSourceCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: MaxRateSourceCodeDTO,
    description: 'Retrieves all max rate source codes.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getMaxRateSourceCodes(): Promise<MaxRateSourceCodeDTO[]> {
    return this.service.getMaxRateSourceCodes();
  }
}
