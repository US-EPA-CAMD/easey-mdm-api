import { Test } from '@nestjs/testing';

import { AccountNumbersService } from './account-numbers.service';
import { AccountFactRepository } from './account-fact.repository';
import { AccountNumberMap } from '../maps/account-number.map';
import { AccountFact } from '../entities/account-fact.entity';
import { AccountNumberDTO } from '../dto/account-number.dto';

const mockAccountFactRepository = () => ({
  getAllAccountNumbers: jest.fn(),
});

describe('-- Account Number Service --', () => {
  let accountNumbersService;
  let accountFactRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AccountNumbersService,
        {
          provide: AccountFactRepository,
          useFactory: mockAccountFactRepository,
        },
        AccountNumberMap,
      ],
    }).compile();

    accountNumbersService = module.get(AccountNumbersService);
    accountFactRepository = module.get(AccountFactRepository);
  });

  describe('getAllAccountNumbers', () => {
    it('repository.getAllAccountNumbers() and returns all valid account numbers', async () => {
      let accountFactEntity: AccountFact = new AccountFact();
      accountFactEntity.accountNumber = '';
      accountFactEntity.accountName = '';

      const accoutNumberDTO: AccountNumberDTO = {
        accountNumber: '',
        accountName: '',
      };

      accountFactRepository.getAllAccountNumbers.mockResolvedValue([
        accountFactEntity,
      ]);

      let result = await accountNumbersService.getAllAccountNumbers();

      expect(accountFactRepository.getAllAccountNumbers).toHaveBeenCalled();
      expect(result).toEqual([accoutNumberDTO]);
    });
  });
});
