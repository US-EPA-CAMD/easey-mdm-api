import { Test } from '@nestjs/testing';

import { AccountTypesService } from './account-types.service';
import { AccountTypeRepository } from './account-type-code.repository';
import { AccountTypeMap } from '../maps/account-type.map';
import { AccountType } from '../entities/account-type-code.entity';
import { AccountTypeGroup } from '../entities/account-type-group-code.entity';
import { AccountTypeDTO } from '../dto/account-type.dto';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { Logger } from '@us-epa-camd/easey-common/logger';

const mockAccountTypeRepository = () => ({
  getAllAccountTypes: jest.fn(),
});

describe('-- Account Type Service --', () => {
  let accountTypesService;
  let accountTypeRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        AccountTypesService,
        {
          provide: AccountTypeRepository,
          useFactory: mockAccountTypeRepository,
        },
        AccountTypeMap,
        ConfigService,
        Logger,
      ],
    }).compile();

    accountTypesService = module.get(AccountTypesService);
    accountTypeRepository = module.get(AccountTypeRepository);
  });

  describe('getAllAccountTypes', () => {
    it('repository.getAllAccountTypes() and returns all valid account types', async () => {
      let accountTypeEntity: AccountType = new AccountType();
      let accountTypeGroupEntity: AccountTypeGroup = new AccountTypeGroup();
      accountTypeEntity.accountTypeCode = '';
      accountTypeEntity.accountTypeDescription = '';
      accountTypeEntity.accountTypeGroupCode = '';
      accountTypeGroupEntity.accountTypeGroupDescription = '';
      accountTypeEntity.accountTypeGroup = accountTypeGroupEntity;

      const accountTypeDTO: AccountTypeDTO = {
        accountTypeCode: '',
        accountTypeDescription: '',
        accountTypeGroupCode: '',
        accountTypeGroupDescription: '',
      };

      accountTypeRepository.getAllAccountTypes.mockResolvedValue([
        accountTypeEntity,
      ]);

      let result = await accountTypesService.getAllAccountTypes();

      expect(accountTypeRepository.getAllAccountTypes).toHaveBeenCalled();
      expect(result).toEqual([accountTypeDTO]);
    });
  });
});
