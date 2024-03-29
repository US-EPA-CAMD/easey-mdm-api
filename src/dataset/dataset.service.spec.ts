import { Test } from '@nestjs/testing';

import { DataSetRepository } from './dataset.repository';
import { DataSetService } from './dataset.service';
import { DataSetMap } from '../maps/dataset.map';
import { DataTableMap } from '../maps/datatable.map';
import { DataColumnMap } from '../maps/datacolumn.map';
import { DataSet } from '../entities/dataset.entity';
import { DataTable } from '../entities/datatable.entity';
import { DataColumn } from '../entities/datacolumn.entity';

const mockRepository = () => ({
  find: jest.fn(),
  getDataSet: jest.fn(),
  getDataSetResults: jest.fn(),
});

const dataset = new DataSet();
dataset.code = 'TEST';
dataset.displayName = 'Test';
dataset.groupCode = 'TEST';
const dataTable = new DataTable();
dataTable.dataSetCode = 'TEST';
dataTable.displayName = 'Test';
dataTable.sqlStatement = 'SELECT * FROM SCHEMA.TABLE';
const dataColumn = new DataColumn();
dataColumn.name = 'column_one';
dataColumn.alias = 'columnOne';
dataColumn.displayName = 'Column One';
dataTable.columns = [];
dataTable.columns.push(dataColumn);
dataset.tables = [];
dataset.tables.push(dataTable);

describe('DataSetService', () => {
  let repository: any;
  let service: DataSetService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DataSetMap,
        DataTableMap,
        DataColumnMap,
        DataSetService,
        {
          provide: DataSetRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get(DataSetService);
    repository = module.get(DataSetRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('listDataSets', () => {

    it('should return a list of datasets', async () => {
      repository.find.mockResolvedValue([]);
      const results = await service.listDataSetsByGroup('');

      expect(repository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getDataSet', () => {
    it('should return a dataset', async () => {
      repository.getDataSet.mockResolvedValue(dataset);
      repository.getDataSetResults.mockResolvedValue([]);
      const result = await service.getDataSet('', '');

      expect(repository.getDataSet).toHaveBeenCalled();
      expect(repository.getDataSetResults).toHaveBeenCalled();
      expect(result).toEqual([]);
    });

  });
});
