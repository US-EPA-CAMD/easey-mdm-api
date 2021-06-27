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
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('sub-data-code')
export class SubDataCodeController {
  constructor(private readonly subDataCodeService: SubDataCodeService) {}

  // @Post()
  // create(@Body() createSubDataCodeDto: SubDataCodeDto) {
  //   return this.subDataCodeService.create(createSubDataCodeDto);
  // }

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: SubDataCodeDto,
    description: 'Retrieves all Substitue Data Codes',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  findAllSubDataCode() {
    return this.subDataCodeService.findAllSubDataCode();
  }

  @Put(':id')
  @ApiOkResponse({
    type: SubDataCodeDto,
    description: 'Updates Substitue Data Code',
  })
  @ApiBadRequestResponse({
    description: 'Invalid Request',
  })
  updateSubDataCode(
    @Param('id') id: string,
    @Body() updateSubDataCodeDto: SubDataCodeDto,
  ) {
    return this.subDataCodeService.updateSubDataCode(id, updateSubDataCodeDto);
  }

  // @Delete(':id')
  // removeSubDataCode(@Param('id') id: string) {
  //   return this.subDataCodeService.removeSubDataCode(id);
  // }
}
