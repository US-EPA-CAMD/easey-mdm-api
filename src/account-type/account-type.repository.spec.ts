import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';
import { AccountTypeCode } from '@us-epa-camd/easey-common/enums';

import { AccountTypeRepository } from './account-type.repository';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';

const mockQueryBuilder = () => ({
  select: jest.fn(),
  innerJoin: jest.fn(),
  andWhere: jest.fn(),
  orderBy: jest.fn(),
  getMany: jest.fn(),  
});

describe('AccountTypeRepository', () => {
  let queryBuilder: any;
  let repository: AccountTypeRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AccountTypeRepository,
        {
          provide: SelectQueryBuilder,
          useFactory: mockQueryBuilder
        },
      ],
    }).compile();

    repository = module.get(AccountTypeRepository);
    queryBuilder = module.get(SelectQueryBuilder);

    repository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);

    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.innerJoin.mockReturnValue(queryBuilder);
    queryBuilder.andWhere.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue([]);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(queryBuilder).toBeDefined();
  });

  describe('getAccountTypeCodes', () => {

    it('should return a list of account type codes', async () => {
      const params: AccountTypeParamsDTO = {
        exclude: [AccountTypeCode.GENERAL],
      };
      const results = await repository.getAccountTypeCodes(params);
      expect(queryBuilder.select).toHaveBeenCalled();
      expect(queryBuilder.innerJoin).toHaveBeenCalled();
      expect(queryBuilder.andWhere).toHaveBeenCalled();
      expect(queryBuilder.orderBy).toHaveBeenCalled();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
