import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { QualTypeCodeService } from './qual-type-code.service';
import { QualTypeCodeDTO } from '../dto/qual-type-code.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Qualification Type Codes')
export class QualTypeCodeController {
  constructor(private readonly service: QualTypeCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: QualTypeCodeDTO,
    description: 'Retrieves all qual type codes.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getQualTypeCodes(): Promise<QualTypeCodeDTO[]> {
    return this.service.getQualTypeCodes();
  }
}