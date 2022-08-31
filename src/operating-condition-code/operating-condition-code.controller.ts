import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { OperatingConditionCodeDTO } from '../dto/operating-condition-code.dto';
import { OperatingConditionCodeService } from './operating-condition-code.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Operating Condition Codes')
export class OperatingConditionCodeController {
  constructor(private readonly service: OperatingConditionCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: OperatingConditionCodeDTO,
    description: 'Retrieves all span scale codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getOperatingConditionCodes(): Promise<OperatingConditionCodeDTO[]> {
    return this.service.getOperatingConditionCodes();
  }
}
