import {
  ApiTags,
  ApiOkResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { Get, Controller, Param } from '@nestjs/common';

import { DataSetDTO } from '../dto/dataset.dto';
import { DataSetService } from '../dataset/dataset.service';

@Controller()
@ApiSecurity('APIKey')
@ApiTags('Codes & Descriptions')
export class MasterDataController {
  private groupCode = 'MDM';

  constructor(
    private readonly service: DataSetService
  ) {}

  @Get()
  @ApiOkResponse({
    isArray: true,
    type: DataSetDTO,
    description: 'Returns a list of valid Master Data code tables available',
  })
  listCodeTables(): Promise<DataSetDTO[]> {
    return this.service.listDataSets(this.groupCode);
  }

  @Get(':dataSetCode')
  @ApiOkResponse({
    isArray: true,
    description: 'Returns a list of Master Data codes & descriptions for the name provided',
  })
  getCodeTable(@Param('dataSetCode') dataSetCode: string): Promise<any[]> {
    return this.service.getDataSet(dataSetCode, this.groupCode);
  }
}
