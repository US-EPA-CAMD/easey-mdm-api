import {
  Get,
  Param,
  Controller,
} from '@nestjs/common';

import {
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';

import { DataSetDTO } from '../dto/dataset.dto';
import { DataSetService } from '../dataset/dataset.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Relationships')
export class RelationshipsController {
  private groupCode = 'MDMREL';

  constructor(
    private readonly service: DataSetService,
  ) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: DataSetDTO,
    description: 'Returns a list of valid Master Data relationships available',
  })
  listRelationships(): Promise<DataSetDTO[]> {
    console.log('List Relationships');
    return this.service.listDataSets(this.groupCode);
  }

  @Get(':name')
  @ApiOkResponse({
    isArray: true,
    description: 'Returns relationship data for the name provided',
  })
  getRelationships(@Param('name') name: string): Promise<any[]> {
    console.log('Get Relationships: ', name);
    return this.service.getDataSet(name, this.groupCode);
  }
}
