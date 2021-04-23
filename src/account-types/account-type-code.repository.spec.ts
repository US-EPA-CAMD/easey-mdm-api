import { Test } from '@nestjs/testing';
import { SelectQueryBuilder } from 'typeorm';

import { AccountTypeRepository } from './account-type-code.repository';
import { AccountType } from '../entities/account-type-code.entity';
import { AccountTypeDTO } from '../dto/account-type.dto';

const mockQueryBuilder = () => ({
  getMany: jest.fn(),
  select: jest.fn(),
  innerJoin: jest.fn(),
  orderBy: jest.fn(),
});

describe('AccountTypeRepository', () => {
  let accountTypeRepository;
  let queryBuilder;
  const accountTypeDTO = new AccountTypeDTO();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AccountTypeRepository,
        { provide: SelectQueryBuilder, useFactory: mockQueryBuilder },
      ],
    }).compile();

    accountTypeRepository = module.get<AccountTypeRepository>(
      AccountTypeRepository,
    );

    queryBuilder = module.get<SelectQueryBuilder<AccountType>>(
      SelectQueryBuilder,
    );

    accountTypeRepository.createQueryBuilder = jest
      .fn()
      .mockReturnValue(queryBuilder);
    queryBuilder.select.mockReturnValue(queryBuilder);
    queryBuilder.innerJoin.mockReturnValue(queryBuilder);
    queryBuilder.orderBy.mockReturnValue(queryBuilder);
    queryBuilder.getMany.mockReturnValue(accountTypeDTO);
  });

  describe('getAllAccountTypes', () => {
    it('calls createQueryBuilder and gets all accountTypes from the repository', async () => {
      let result = await accountTypeRepository.getAllAccountTypes();
      expect(queryBuilder.getMany).toHaveBeenCalled();
      expect(result).toEqual(accountTypeDTO);
    });
  });
});
