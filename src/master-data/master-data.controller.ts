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
import { FuelTypeDTO } from '../dto/fuel-type.dto';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Codes & Descriptions')
@ApiExtraModels(DataSetDTO)
export class MasterDataController {
  private groupCode = 'MDM';

  constructor(
    private readonly service: DataSetService
  ) {}

  @Get('list')
  @ApiOkResponse({
    isArray: true,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Master Data code tables available."
  })
  listCodeTables() {
    return this.service.listDataSetsByGroup(this.groupCode);
  }

  @Get(':code')
  @ApiOkResponse({
    isArray: true,
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
