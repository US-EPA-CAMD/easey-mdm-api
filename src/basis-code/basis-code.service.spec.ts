import { Test, TestingModule } from '@nestjs/testing';

import { BasisCodeService } from './basis-code.service';
import { BasisCodeRepository } from './basis-code.repository';
import { BasisCodeMap } from '../maps/basis-code.map';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

describe('BasisCodeService', () => {
  let mockBasisCodeRepository = () => ({
    getBasisCodes: jest.fn(() => []),
  });
  let service: BasisCodeService;
  let repository: BasisCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        {
          provide: LoggerModule,
          useValue: {
            info: jest.fn(),
          },
        },
        BasisCodeService,
        {
          provide: BasisCodeRepository,
          useFactory: mockBasisCodeRepository,
        },
        BasisCodeMap,
      ],
    }).compile();

    service = module.get<BasisCodeService>(BasisCodeService);
    repository = module.get<BasisCodeRepository>(BasisCodeRepository);
  });

  describe('getControlEquipParamCodes', () => {
    it('should call the ControlEquipParamCodeRepository.getControlEquipParamCodes() and return a list of control equipment parameter codes', async () => {
      const result = await service.getBasisCodes();
      expect(result).toEqual([]);
      expect(repository.getBasisCodes).toHaveBeenCalled();
    });
  });
});
