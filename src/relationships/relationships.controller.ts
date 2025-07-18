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
  ApiExtraModels, getSchemaPath,
} from '@nestjs/swagger';

import {
  DataDictionary,
  OverrideKeys,
  PropertyKeys
} from '@us-epa-camd/easey-common/data-dictionary';

import { DataSetDTO } from '../dto/dataset.dto';
import { DataSetService } from '../dataset/dataset.service';
import { ArrayResponse } from '@us-epa-camd/easey-common/interfaces/common.interface';
import { CodeTableDto } from '../dto/code-table.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Relationships')
@ApiExtraModels(DataSetDTO)
@ApiExtraModels(CodeTableDto)
export class RelationshipsController {
  private groupCode = 'MDMREL';

  constructor(
    private readonly service: DataSetService,
  ) {}

  @Get('list')
  @ApiOkResponse({
    description: 'Data retrieved successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            items: {
              type: 'array',
              items: { $ref: getSchemaPath(CodeTableDto)},
            }
          },
        },
      },
    },
  })
  @ApiOperation({
    description: "Returns a list of Master Data relationships available."
  })
  async listRelationships() : Promise<ArrayResponse<CodeTableDto>> {
    const relationships =  await this.service.listDataSetsByGroup(this.groupCode);

    return  {
      items: relationships
    };
  }

  @Get(':code')
  @ApiOkResponse({
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
