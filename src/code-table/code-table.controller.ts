import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { Get, Controller, Param } from '@nestjs/common';

import { DataSetDTO } from './../dto/dataset.dto';
import { CodeTableService } from './code-table.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Standard Code Tables')
export class CodeTableController {
  constructor(
    private readonly service: CodeTableService
  ) {}

  @Get('list')
  @ApiOkResponse({
    isArray: true,
    type: DataSetDTO,
    description: 'Returns a list of the valid code tables available',
  })
  listCodeTables(): Promise<DataSetDTO[]> {
    return this.service.listCodeTables();
  }

  @Get(':codetable')
  @ApiOkResponse({
    isArray: true,
    description: 'Returns a list of codes based on the code table provided',
  })
  getCodeTable(@Param('codetable') codeTable: string): Promise<any[]> {
    return this.service.getCodeTable(codeTable);
  }
}
