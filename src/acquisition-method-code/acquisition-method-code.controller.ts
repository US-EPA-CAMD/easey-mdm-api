import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';
import { AcquisitionMethodCodeService } from './acquisition-method-code.service';
import { AcquisitionMethodCodeDTO } from '../dto/acquisition-method-code.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Acquisition Method Codes')
export class AcquisitionMethodCodeController {
  constructor(private readonly service: AcquisitionMethodCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: AcquisitionMethodCodeDTO,
    description: 'Retrieves all acquistion method codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getAcquisitionMethodCodes(): Promise<AcquisitionMethodCodeDTO[]> {
    return this.service.getAcquisitionMethodCodes();
  }
}
