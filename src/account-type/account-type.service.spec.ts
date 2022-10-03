import { Test } from '@nestjs/testing';
import { AccountTypeCode } from '@us-epa-camd/easey-common/enums';

import { AccountTypeRepository } from './account-type.repository';
import { AccountTypeService } from './account-type.service';
import { AccountTypeMap } from '../maps/account-type.map';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';

const mockRepository = () => ({
  getAccountTypeCodes: jest.fn(),
});

describe('AccountTypeService', () => {
  let repository: any;
  let service: AccountTypeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AccountTypeMap,
        AccountTypeService,
        {
          provide: AccountTypeRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get(AccountTypeService);
    repository = module.get(AccountTypeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('getAccountTypes', () => {

    it('should return a list of account type codes', async () => {
      const params: AccountTypeParamsDTO = {
        exclude: [AccountTypeCode.GENERAL],
      };
      repository.getAccountTypeCodes.mockResolvedValue([]);
      const results = await service.getAccountTypeCodes(params);

      expect(repository.getAccountTypeCodes).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

  });
});
