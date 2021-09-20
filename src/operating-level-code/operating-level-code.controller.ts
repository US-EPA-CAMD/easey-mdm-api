import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OperatingLevelCodeDTO } from '../dto/operating-level-code.dto';
import { OperatingLevelCodeService } from './operating-level-code.service';

@ApiTags('Operating Level Codes')
@Controller()
export class OperatingLevelCodeController {
  constructor(private readonly service: OperatingLevelCodeService) {}

  @Get()
  @ApiOkResponse({
    type: OperatingLevelCodeDTO,
    description: 'Retrieves all Operating Level Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  async getOperatingLevelCodes(): Promise<OperatingLevelCodeDTO[]> {
    return this.service.getOperatingLevelCodes();
  }
}
