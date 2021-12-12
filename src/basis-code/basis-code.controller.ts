import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { BasisCodeService } from './basis-code.service';
import { BasisCodeDTO } from '../dto/basis-code.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Basis Codes')
export class BasisCodeController {
  constructor(private readonly service: BasisCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: BasisCodeDTO,
    description: 'Retrieves all basis codes'
  })
  @ApiBadRequestResponse({
    description: 'Invalid request'
  })
  getBasisCodes(): Promise<BasisCodeDTO[]> {
    return this.service.getBasisCodes();
  }
}
