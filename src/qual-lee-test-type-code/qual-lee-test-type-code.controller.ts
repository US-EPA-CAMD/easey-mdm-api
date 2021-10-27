import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QualLeeTestTypeCodeService } from './qual-lee-test-type-code.service';
import { QualLeeTestTypeCodeDTO } from '../dto/qual-lee-test-type-code.dto';

@ApiTags('Qual LEE Test Type Codes')
@Controller()
export class QualLeeTestTypeCodeController {
  constructor(private readonly service: QualLeeTestTypeCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: QualLeeTestTypeCodeDTO,
    description: 'Retrieves all qual LEE test type codes.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getQualLeeTestTypeCodes(): Promise<QualLeeTestTypeCodeDTO[]> {
    return this.service.getQualLeeTestTypeCodes();
  }
}
