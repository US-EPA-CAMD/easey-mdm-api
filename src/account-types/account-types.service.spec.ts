import { Test } from '@nestjs/testing';

import { AccountTypesService } from './account-types.service';
import { AccountTypeRepository } from './account-type-code.repository';
import { AccountTypeMap } from '../maps/account-type.map';

const mockAccountTypeRepository = () => ({
  getAllAccountTypes: jest.fn(),
});

const mockMap = () => ({
  many: jest.fn(),
});

describe('-- Account Type Service --', () => {
  let accountTypesService;
  let accountTypeRepository;
  let accountTypesMap;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AccountTypesService,
        {
          provide: AccountTypeRepository,
          useFactory: mockAccountTypeRepository,
        },
        { provide: AccountTypeMap, useFactory: mockMap },
      ],
    }).compile();

    accountTypesService = module.get(AccountTypesService);
    accountTypeRepository = module.get(AccountTypeRepository);
    accountTypesMap = module.get(AccountTypeMap);
  });

  describe('getAllAccountTypes', () => {
    it('repository.getAllAccountTypes() and returns all valid account types', async () => {
      accountTypeRepository.getAllAccountTypes.mockResolvedValue(
        'list of account types',
      );
      accountTypesMap.many.mockReturnValue('mapped DTOs');

      let result = await accountTypesService.getAllAccountTypes();

      expect(accountTypeRepository.getAllAccountTypes).toHaveBeenCalled();
      expect(accountTypesMap.many).toHaveBeenCalled();
      expect(result).toEqual('mapped DTOs');
    });
  });
});
