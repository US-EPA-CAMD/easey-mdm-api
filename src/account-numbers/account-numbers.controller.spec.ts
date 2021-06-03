import { Test } from '@nestjs/testing';

import { AccountNumbersController } from './account-numbers.controller';
import { AccountNumbersService } from './account-numbers.service';
import { AccountNumberMap } from '../maps/account-number.map';
import { AccountFactRepository } from './account-fact.repository';
import { AccountNumberDTO } from '../dto/account-number.dto';

describe('-- Account Numbers Controller --', () => {
  let accountNumbersController;
  let accountNumbersService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [AccountNumbersController],
      providers: [
        AccountNumbersService,
        AccountNumberMap,
        AccountFactRepository,
      ],
    }).compile();

    accountNumbersController = module.get(AccountNumbersController);
    accountNumbersService = module.get(AccountNumbersService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('* getAllAccountNumbers', () => {
    it('should call the service and return a list of valid account numbers', async () => {
      const expectedResult: AccountNumberDTO[] = [];
      jest
        .spyOn(accountNumbersService, 'getAllAccountNumbers')
        .mockResolvedValue(expectedResult);
      expect(await accountNumbersController.getAllAccountNumbers()).toBe(
        expectedResult,
      );
    });
  });
});
