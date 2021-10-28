import { Test } from '@nestjs/testing';

import { AccountTypesService } from './account-types.service';
import { AccountTypesController } from './account-types.controller';
import { AccountTypeRepository } from './account-type-code.repository';
import { AccountTypeMap } from '../maps/account-type.map';
import { AccountTypeDTO } from '../dto/account-type.dto';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';
import { Logger, LoggerModule } from '@us-epa-camd/easey-common/logger';
import { ConfigService } from '@nestjs/config';

describe('-- Account Types Controller --', () => {
  let accountTypesController;
  let accountTypesService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [AccountTypesController],
      providers: [
        AccountTypesService,
        AccountTypeMap,
        AccountTypeRepository,
        ConfigService,
        Logger,
      ],
    }).compile();

    accountTypesController = module.get(AccountTypesController);
    accountTypesService = module.get(AccountTypesService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('* getAllAccountTypes', () => {
    it('should call the service and return a list of valid account types', async () => {
      const expectedResult: AccountTypeDTO[] = [];
      const accountTypeParamsDto = new AccountTypeParamsDTO();
      jest
        .spyOn(accountTypesService, 'getAllAccountTypes')
        .mockResolvedValue(expectedResult);
      expect(
        await accountTypesController.getAllAccountTypes(accountTypeParamsDto),
      ).toBe(expectedResult);
    });
  });
});
