import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OperatingConditionCodeDTO } from '../dto/operating-condition-code.dto';
import { OperatingConditionCodeService } from './operating-condition-code.service';

@ApiTags('Operating Condition Codes')
@Controller()
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
