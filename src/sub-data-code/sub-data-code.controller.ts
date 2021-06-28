import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SubDataCodeService } from './sub-data-code.service';
import { SubDataCodeDTO } from '../dto/sub-data-code.dto';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Substitute Data Codes')
@Controller()
export class SubDataCodeController {
  constructor(private readonly subDataCodeService: SubDataCodeService) {}

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
    return this.subDataCodeService.getSubDataCodes();
  }
}
