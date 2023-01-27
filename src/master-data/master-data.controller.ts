import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { Get, Controller, Param } from '@nestjs/common';
import { DataSetDTO } from '../dto/dataset.dto';
import { DataSetService } from '../dataset/dataset.service';
import { DataDictionary } from '@us-epa-camd/easey-common/data-dictionary';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Codes & Descriptions')
export class MasterDataController {
  private groupCode = 'MDM';

  constructor(
    private readonly service: DataSetService
  ) {}

  @Get('list')
  @ApiOkResponse({
    isArray: true,
    type: DataSetDTO,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Master Data code tables available."
  })
  listCodeTables(): Promise<DataSetDTO[]> {
    return this.service.listDataSets(this.groupCode);
  }

  @Get(':dataSetCode')
  @ApiOkResponse({
    isArray: true,
    description: 'Data retrieved successfully',
  })
  @ApiOperation({
    description: "Returns a list of Master Data codes & descriptions for the dataset provided."
  })
  @ApiParam({
    name: 'dataSetCode',
    ...DataDictionary.getMetadata(
      DataDictionary.properties.dataSetCode,
      DataDictionary.properties.dataSetCode?.metadata.masterData,      
    )
  })
  getCodeTable(@Param('dataSetCode') dataSetCode: string): Promise<any[]> {
    return this.service.getDataSet(dataSetCode, this.groupCode);
  }
}
