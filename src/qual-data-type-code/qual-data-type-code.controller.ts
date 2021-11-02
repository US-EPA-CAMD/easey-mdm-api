import { Controller, Get } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QualDataTypeCodeService } from './qual-data-type-code.service';
import { QualDataTypeCodeDTO } from '../dto/qual-data-type-code.dto';

@ApiTags('Qualification Data Type Codes')
@Controller()
export class QualDataTypeCodeController {
  constructor(private readonly service: QualDataTypeCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: QualDataTypeCodeDTO,
    description: 'Retrieves all qual data type codes.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getQualDataTypeCodes(): Promise<QualDataTypeCodeDTO[]> {
    return this.service.getQualDataTypeCodes();
  }
}
