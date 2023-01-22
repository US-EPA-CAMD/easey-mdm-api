import { Test } from '@nestjs/testing';

import { DataSetService } from '../dataset/dataset.service';
import { RelationshipsController } from './relationships.controller';
import { DataSetRepository } from '../dataset/dataset.repository';

import { DataColumnMap } from '../maps/datacolumn.map';
import { DataTableMap } from '../maps/datatable.map';
import { DataSetMap } from '../maps/dataset.map';
import { DataSetDTO } from '../dto/dataset.dto';

describe('RelationshipsController', () => {
  let service: DataSetService;
  let controller: RelationshipsController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [RelationshipsController],
      providers: [
        DataSetMap,
        DataTableMap,
        DataColumnMap,
        DataSetService,
        DataSetRepository
      ],
    }).compile();

    service = module.get(DataSetService);
    controller = module.get(RelationshipsController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('listRelationships', () => {
    
    it('should return a list of valid Master Data relationships available', async () => {
      const expectedResult: DataSetDTO[] = [];

      jest.spyOn(
        service,
        'listDataSets'
      ).mockResolvedValue(
        expectedResult
      );
      
      expect(
        await controller.listRelationships()
      ).toBe(
        expectedResult
      );
    });

  });

  describe('getRelationships', () => {
    
    it('should return relationship data for the name provided', async () => {
      const expectedResult: any[] = [];

      jest.spyOn(
        service,
        'getDataSet'
      ).mockResolvedValue(
        expectedResult
      );
      
      expect(
        await controller.getRelationships('')
      ).toBe(
        expectedResult
      );
    });
  });
});
