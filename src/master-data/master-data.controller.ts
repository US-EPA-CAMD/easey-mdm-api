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
@ApiTags('Codes & Descriptions')
@ApiExtraModels(DataSetDTO)
@ApiExtraModels(CodeTableDto)
export class MasterDataController {
  private groupCode = 'MDM';

  constructor(
    private readonly service: DataSetService
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
    description: "Returns a list of Master Data code tables available."
  })
  async listCodeTables() : Promise<ArrayResponse<CodeTableDto>> {
    const codeTables = await this.service.listDataSetsByGroup(this.groupCode);

    return  {
      items: codeTables
    };
  }

  @Get(':code')
  @ApiOkResponse({
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Master Data codes & descriptions for the dataset provided."
  })
  @ApiParam({
    name: 'code',
    ...DataDictionary.getMetadata(
      PropertyKeys.CODE,
      OverrideKeys.MASTER_DATA,
      true,
  )})
  async getCodeTable(
    @Param('code') dataSetCode: string
  ): Promise<ArrayResponse<any>> {
    const dataSetCodes = await this.service.getDataSet(dataSetCode, this.groupCode);

    return  {
      items: dataSetCodes
    };
  }
}
