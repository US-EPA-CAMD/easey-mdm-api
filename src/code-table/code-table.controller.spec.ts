import { Test } from '@nestjs/testing';

import { CodeTableService } from './code-table.service';
import { CodeTableController } from './code-table.controller';
import { CodeTableRepository } from './code-table.repository';

import { DataColumnMap } from '../maps/datacolumn.map';
import { DataTableMap } from '../maps/datatable.map';
import { DataSetMap } from '../maps/dataset.map';
import { DataSetDTO } from '../dto/dataset.dto';

describe('CodeTableController', () => {
  let service: CodeTableService;
  let controller: CodeTableController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [CodeTableController],
      providers: [
        DataSetMap,
        DataTableMap,
        DataColumnMap,
        CodeTableService,
        CodeTableRepository
      ],
    }).compile();

    service = module.get(CodeTableService);
    controller = module.get(CodeTableController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('listCodeTables', () => {
    
    it('should return a list of available Master data datasets', async () => {
      const expectedResult: DataSetDTO[] = [];

      jest.spyOn(
        service,
        'listCodeTables'
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
    
    it('should return a list of codes based on the path', async () => {
      const expectedResult: any[] = [];

      jest.spyOn(
        service,
        'getCodeTable'
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
