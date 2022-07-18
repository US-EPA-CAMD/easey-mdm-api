import { Test, TestingModule } from '@nestjs/testing';

import { SystemDesignationCodeService } from './system-designation-code.service';
import { SystemDesignationCodeRepository } from './system-designation-code.repository';
import { SystemDesignationCodeMap } from '../maps/system-designation-code.map';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';

const mockSystemDesignationCodeRepository = () => ({
  getSystemDesignationCodes: jest.fn(() => []),
});

describe('SystemDesignationCodeService', () => {
  let service: SystemDesignationCodeService;
  let repository: SystemDesignationCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        SystemDesignationCodeService,
        {
          provide: SystemDesignationCodeRepository,
          useFactory: mockSystemDesignationCodeRepository,
        },
        SystemDesignationCodeMap,
      ],
    }).compile();

    service = module.get<SystemDesignationCodeService>(
      SystemDesignationCodeService,
    );
    repository = module.get<SystemDesignationCodeRepository>(
      SystemDesignationCodeRepository,
    );
  });

  describe('getSystemDesignationCodes', () => {
    it('should call the SystemDesignationCodeRepository.getSystemDesignationCodes() and return a list of control equipment parameter codes', async () => {
      const result = await service.getSystemDesignationCodes();
      expect(result).toEqual([]);
      expect(repository.getSystemDesignationCodes).toHaveBeenCalled();
    });
  });
});
