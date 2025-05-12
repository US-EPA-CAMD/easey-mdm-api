import { Test } from '@nestjs/testing';
import { EntityManager } from 'typeorm';

import { DataSetRepository } from '../dataset/dataset.repository';
import { DataSetService } from '../dataset/dataset.service';
import { DataColumnMap } from '../maps/datacolumn.map';
import { DataSetMap } from '../maps/dataset.map';
import { DataTableMap } from '../maps/datatable.map';
import { RelationshipsController } from './relationships.controller';

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
        DataSetRepository,
        EntityManager,
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
      const expectedResult: any[] = [];

      jest
        .spyOn(service, 'listDataSetsByGroup')
        .mockResolvedValue(expectedResult);

      expect(await controller.listRelationships()).toStrictEqual({ items: expectedResult } );
    });
  });

  describe('getRelationships', () => {
    it('should return relationship data for the name provided', async () => {
      const expectedResult: any[] = [];

      jest.spyOn(service, 'getDataSet').mockResolvedValue(expectedResult);

      expect(await controller.getRelationships('')).toStrictEqual({ items: expectedResult } );
    });
  });
});
