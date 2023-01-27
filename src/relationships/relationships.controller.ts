import {
  Get,
  Controller,
  Param,
} from '@nestjs/common';

import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';

import { DataSetDTO } from '../dto/dataset.dto';
import { DataSetService } from '../dataset/dataset.service';
import { DataDictionary } from '@us-epa-camd/easey-common/data-dictionary';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Relationships')
export class RelationshipsController {
  private groupCode = 'MDMREL';

  constructor(
    private readonly service: DataSetService,
  ) {}

  @Get('list')
  @ApiOkResponse({
    isArray: true,
    type: DataSetDTO,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Master Data relationships available."
  })
  listRelationships(): Promise<DataSetDTO[]> {
    return this.service.listDataSets(this.groupCode);
  }

  @Get(':dataSetCode')
  @ApiOkResponse({
    isArray: true,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Master Data relationships for the dataset provided."
  })
  @ApiParam({
    name: 'dataSetCode',
    ...DataDictionary.getMetadata(
      DataDictionary.properties.dataSetCode,
      DataDictionary.properties.dataSetCode?.metadata.relationships,
    )
  })
  getRelationships(@Param('dataSetCode') dataSetCode: string): Promise<any[]> {
    return this.service.getDataSet(dataSetCode, this.groupCode);
  }
}
