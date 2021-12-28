import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { OperatingLevelCodeRepository } from './operating-level-code.repository';
import { OperatingLevelCodeService } from './operating-level-code.service';

const mockOperatingLevelCodeRepository = () => ({
  getOperatingLevelCodes: jest.fn(() => []),
});

describe('OperatingLevelCodeService', () => {
  let service: OperatingLevelCodeService;
  let repository: OperatingLevelCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        OperatingLevelCodeService,
        {
          provide: OperatingLevelCodeRepository,
          useFactory: mockOperatingLevelCodeRepository,
        },
      ],
    }).compile();

    service = module.get<OperatingLevelCodeService>(OperatingLevelCodeService);
    repository = module.get<OperatingLevelCodeRepository>(
      OperatingLevelCodeRepository,
    );
  });

  describe('getOperatingLevelCodes', () => {
    it('should call the OperatingLevelCodeRepository.getOperatingLevelCodes() and return a list of operating level codes', async () => {
      const result = await service.getOperatingLevelCodes();
      expect(result).toEqual([]);
      expect(repository.getOperatingLevelCodes).toHaveBeenCalled();
    });
  });
});
