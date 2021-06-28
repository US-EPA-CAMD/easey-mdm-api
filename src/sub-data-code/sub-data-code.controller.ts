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
import { SubDataCodeDto } from '../dto/sub-data-code.dto';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Substitute Data Codes')
@Controller()
export class SubDataCodeController {
  constructor(private readonly subDataCodeService: SubDataCodeService) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: SubDataCodeDto,
    description: 'Retrieves all Substitue Data Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  getSubDataCodes(): Promise<SubDataCodeDto[]> {
    return this.subDataCodeService.getSubDataCodes();
  }
}
