import { Test } from '@nestjs/testing';

import { TransactionTypesService } from './transaction-types.service';
import { TransactionTypeRepository } from './transaction-type-code.repository';
import { TransactionTypeMap } from '../maps/transaction-type.map';
import { TransactionType } from '../entities/transaction-type-code.entity';
import { TransactionTypeDTO } from '../dto/transaction-type.dto';

const mockTransactionTypeRepository = () => ({
  find: jest.fn(),
});

describe('-- Transaction Types Service --', () => {
  let transactionTypesService;
  let transactionTypeRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TransactionTypesService,
        {
          provide: TransactionTypeRepository,
          useFactory: mockTransactionTypeRepository,
        },
        TransactionTypeMap,
      ],
    }).compile();

    transactionTypesService = module.get(TransactionTypesService);
    transactionTypeRepository = module.get(TransactionTypeRepository);
  });

  describe('getAllTransactionTypes', () => {
    it('calls repository.find() and returns all valid transaction types', async () => {
      let transactionTypeEntity: TransactionType = new TransactionType();
      transactionTypeEntity.transactionTypeCode = '';
      transactionTypeEntity.transactionTypeDescription = '';

      const transactionTypeDTO: TransactionTypeDTO = {
        transactionTypeCode: '',
        transactionTypeDescription: '',
      };

      transactionTypeRepository.find.mockResolvedValue([transactionTypeEntity]);

      let result = await transactionTypesService.getAllTransactionTypes();

      expect(transactionTypeRepository.find).toHaveBeenCalled();
      expect(result).toEqual([transactionTypeDTO]);
    });
  });
});
