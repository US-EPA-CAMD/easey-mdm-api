import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { CodeTableRepository } from './code-table.repository';

const mockQueryBuilder = () => ({
  innerJoinAndSelect: jest.fn(),
  where: jest.fn(),
  andWhere: jest.fn(),
  orderBy: jest.fn(),
  getOne: jest.fn(),
  getMany: jest.fn(),
});

describe('CodeTableRepository', () => {
  let queryBuilder: any;
  let repository: CodeTableRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CodeTableRepository,
        {
          provide: SelectQueryBuilder,
          useFactory: mockQueryBuilder
        },
      ],
    }).compile();

    repository = module.get(CodeTableRepository);
    queryBuilder = module.get(SelectQueryBuilder);

    repository.query = jest
      .fn()
      .mockReturnValue([]);

    repository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.innerJoinAndSelect.mockReturnValue(queryBuilder);
    queryBuilder.where.mockReturnValue(queryBuilder);
    queryBuilder.andWhere.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getOne.mockReturnValue({});
    queryBuilder.getMany.mockReturnValue([]);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(queryBuilder).toBeDefined();
  });

  describe('getDataSets', () => {

    it('should return a list of datasets based on the arguments', async () => {
      const results = await repository.getDataSets('Master Data');
      expect(queryBuilder.innerJoinAndSelect).toHaveBeenCalled();
      expect(queryBuilder.where).toHaveBeenCalled();
      expect(queryBuilder.orderBy).toHaveBeenCalled();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });  

  describe('getDataSet', () => {

    it('should return a dataset based on the arguments', async () => {
      const results = await repository.getDataSet('', '');
      expect(queryBuilder.innerJoinAndSelect).toHaveBeenCalled();
      expect(queryBuilder.where).toHaveBeenCalled();
      expect(queryBuilder.andWhere).toHaveBeenCalled();
      expect(queryBuilder.orderBy).toHaveBeenCalled();
      expect(queryBuilder.getOne).toHaveBeenCalled();
      expect(results).toEqual({});
    });

  });

  describe('getCodeTable', () => {

    it('should execute the query provided', async () => {
      const results = await repository.getCodeTable('');
      expect(results).toEqual([]);
    });

  });
});
