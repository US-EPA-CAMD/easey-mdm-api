import { Test } from '@nestjs/testing';

import { CodeTableRepository } from './code-table.repository';
import { CodeTableService } from './code-table.service';
import { DataColumnMap } from '../maps/datacolumn.map';
import { DataTableMap } from '../maps/datatable.map';
import { DataSetMap } from '../maps/dataset.map';
import { DataColumn } from '../entities/datacolumn.entity';
import { DataTable } from '../entities/datatable.entity';
import { DataSet } from '../entities/dataset.entity';

const mockRepository = () => ({
  getDataSet: jest.fn(),
  getDataSets: jest.fn(),
  getCodeTable: jest.fn(),
});

describe('CodeTableService', () => {
  let repository: any;
  let service: CodeTableService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DataSetMap,
        DataTableMap,
        DataColumnMap,
        CodeTableService,
        {
          provide: CodeTableRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get(CodeTableService);
    repository = module.get(CodeTableRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('listCodeTables', () => {

    it('should return a list of available Master Data datasets', async () => {
      repository.getDataSets.mockResolvedValue([]);
      const results = await service.listCodeTables();

      expect(repository.getDataSets).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });

  describe('getCodeTable', () => {

    it('should return a list of codes based on the path', async () => {
      const ds = new DataSet();
      ds.tables = [new DataTable()];

      const dt = ds.tables[0];
      dt.columns = [];
      dt.sqlStatement = "SELECT * FROM";

      let col = new DataColumn();
      col.name = 'col1';
      col.alias = 'Column1';
      dt.columns.push(col);

      col = new DataColumn();
      col.name = 'col2';
      col.alias = 'Column2';
      dt.columns.push(col);

      repository.getDataSet.mockResolvedValue(ds);
      repository.getCodeTable.mockResolvedValue([]);
      const results = await service.getCodeTable('');

      expect(repository.getDataSet).toHaveBeenCalled();
      expect(repository.getCodeTable).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
