import { Test, TestingModule } from '@nestjs/testing';

import { BasisCodeController } from './basis-code.controller';
import { BasisCodeService } from './basis-code.service';
import { BasisCodeRepository } from './basis-code.repository';
import { BasisCodeMap } from '../maps/basis-code.map';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockBasisCodeService = () => ({
  getBasisCodes: jest.fn(() => []),
});

describe('BasisCodeController', () => {
  let controller: BasisCodeController;
  let service: BasisCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [BasisCodeController],
      providers: [
        {
          provide: BasisCodeService,
          useFactory: mockBasisCodeService,
        },
        BasisCodeRepository,
        BasisCodeMap,
      ],
    }).compile();

    controller = module.get<BasisCodeController>(BasisCodeController);
    service = module.get<BasisCodeService>(BasisCodeService);
  });

  describe('getBasisCodes', () => {
    it('should call the BasisCodeService and return a list of basic-codes', async () => {
      expect(await controller.getBasisCodes()).toEqual([]);
      expect(service.getBasisCodes).toHaveBeenCalled();
    });
  });
});
