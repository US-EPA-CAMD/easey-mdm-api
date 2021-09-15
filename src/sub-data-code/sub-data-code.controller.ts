import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { SubDataCodeService } from './sub-data-code.service';
import { SubDataCodeDTO } from '../dto/sub-data-code.dto';
@ApiTags('Substitute Data Codes')
@Controller()
export class SubDataCodeController {
  constructor(private readonly service: SubDataCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: SubDataCodeDTO,
    description: 'Retrieves all Substitue Data Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getSubDataCodes(): Promise<SubDataCodeDTO[]> {
    return this.service.getSubDataCodes();
  }
}
