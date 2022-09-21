import { Test } from '@nestjs/testing';
import { AccountTypeCode } from '@us-epa-camd/easey-common/enums';

import { AccountTypeService } from './account-type.service';
import { AccountTypeController } from './account-type.controller';
import { AccountTypeRepository } from './account-type.repository';
import { AccountTypeMap } from '../maps/account-type.map';
import { AccountTypeDTO } from '../dto/account-type.dto';
import { AccountTypeParamsDTO } from '../dto/account-type.params.dto';

describe('AccountTypeController', () => {
  let service: AccountTypeService;
  let controller: AccountTypeController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [AccountTypeController],
      providers: [
        AccountTypeMap,
        AccountTypeService,
        AccountTypeRepository
      ],
    }).compile();

    service = module.get(AccountTypeService);
    controller = module.get(AccountTypeController);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('getAccountTypeCodes', () => {
    
    it('should return a list of account type codes', async () => {
      const expectedResult: AccountTypeDTO[] = [];
      const params: AccountTypeParamsDTO = {
        exclude: [AccountTypeCode.GENERAL],
      };

      jest.spyOn(
        service,
        'getAccountTypeCodes'
      ).mockResolvedValue(
        expectedResult
      );
      
      expect(
        await controller.getAccountTypeCodes(params)
      ).toBe(
        expectedResult
      );
    });

  });
});
