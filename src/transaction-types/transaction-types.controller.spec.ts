import { Test } from '@nestjs/testing';

import { TransactionTypeDTO } from '../dto/transaction-type.dto';
import { TransactionTypeMap } from '../maps/transaction-type.map';
import { TransactionTypesController } from './transaction-types.controller';
import { TransactionTypeRepository } from './transaction-type-code.repository';
import { TransactionTypesService } from './transaction-types.service';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('-- Transaction Types Controller --', () => {
  let transactionTypesController: TransactionTypesController;
  let transactionTypesService: TransactionTypesService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [TransactionTypesController],
      providers: [
        TransactionTypesService,
        TransactionTypeMap,
        TransactionTypeRepository,
      ],
    }).compile();

    transactionTypesController = module.get(TransactionTypesController);
    transactionTypesService = module.get(TransactionTypesService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('* getAllTransactionTypes', () => {
    it('should call the service and return a list of all valid transaction types', async () => {
      const expectedResult: TransactionTypeDTO[] = [];
      jest
        .spyOn(transactionTypesService, 'getAllTransactionTypes')
        .mockResolvedValue(expectedResult);
      expect(await transactionTypesController.getAllTransactionTypes()).toBe(
        expectedResult,
      );
    });
  });
});
