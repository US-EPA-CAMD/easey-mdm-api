import {
  Get,
  Controller,
  Param
} from '@nestjs/common';

import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation,
  ApiParam,
  ApiExtraModels,
} from '@nestjs/swagger';

import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

import { DataSetDTO } from '../dto/dataset.dto';
import { DataSetService } from '../dataset/dataset.service';
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';
import { ProgramDTO } from '../dto/program.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Relationships')
@ApiExtraModels(DataSetDTO)
export class RelationshipsController {
  private groupCode = 'MDMREL';

  constructor(
    private readonly service: DataSetService,
  ) {}

  @Get('list')
  @ApiOkResponse({
    isArray: true,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Master Data relationships available."
  })
  listRelationships() {
    return this.service.listDataSetsByGroup(this.groupCode);
  }

  @Get(':code')
  @ApiOkResponse({
    isArray: true,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Master Data relationships for the dataset provided."
  })
  @ApiParam({
    name: 'code',
    ...DataDictionary.getMetadata(
      PropertyKeys.CODE,
      OverrideKeys.RELATIONSHIPS,
      true,
  )})
  async getRelationships(
    @Param('code') dataSetCode: string
  ): Promise<ArrayResponse<any>> {
    const dataSets = await this.service.getDataSet(dataSetCode, this.groupCode);

    return  {
      items: dataSets
    };
  }
}
