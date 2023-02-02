import { Test } from '@nestjs/testing';

import { DataSetService } from '../dataset/dataset.service';
import { MasterDataController } from './master-data.controller';
import { DataSetRepository } from '../dataset/dataset.repository';

import { DataColumnMap } from '../maps/datacolumn.map';
import { DataTableMap } from '../maps/datatable.map';
import { DataSetMap } from '../maps/dataset.map';
import { DataSetDTO } from '../dto/dataset.dto';

describe('MasterDataController', () => {
  let service: DataSetService;
  let controller: MasterDataController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [MasterDataController],
      providers: [
        DataSetMap,
        DataTableMap,
        DataColumnMap,
        DataSetService,
        DataSetRepository
      ],
    }).compile();

    service = module.get(DataSetService);
    controller = module.get(MasterDataController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('listCodeTables', () => {
    
    it('should return a list of valid Master Data code tables available', async () => {
      const expectedResult: any[] = [];

      jest.spyOn(
        service,
        'listDataSetsByGroup'
      ).mockResolvedValue(
        expectedResult
      );
      
      expect(
        await controller.listCodeTables()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getCodeTable', () => {
    
    it('should return a list of Master Data codes & descriptions for the name provided', async () => {
      const expectedResult: any[] = [];

      jest.spyOn(
        service,
        'getDataSet'
      ).mockResolvedValue(
        expectedResult
      );
      
      expect(
        await controller.getCodeTable('')
      ).toBe(
        expectedResult
      );
    });
  });
});
