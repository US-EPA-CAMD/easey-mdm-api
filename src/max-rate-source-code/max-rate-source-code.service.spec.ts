import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { MaxRateSourceCodeRepository } from './max-rate-source-code.repository';
import { MaxRateSourceCodeService } from './max-rate-source-code.service';

const mockMaxRateSourceCodeRepository = () => ({
  getMaxRateSourceCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('MaxRateSourceCodeService', () => {
  let service: MaxRateSourceCodeService;
  let repository: MaxRateSourceCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      providers: [
        MaxRateSourceCodeService,
        {
          provide: MaxRateSourceCodeRepository,
          useFactory: mockMaxRateSourceCodeRepository,
        },
      ],
    }).compile();

    service = module.get<MaxRateSourceCodeService>(MaxRateSourceCodeService);
    repository = module.get<MaxRateSourceCodeRepository>(
      MaxRateSourceCodeRepository,
    );
  });

  describe('getMaxRateSourceCodes', () => {
    it('calls the MaxRateSourceCodeRepository and returns a max rate source codes', async () => {
      const result = await service.getMaxRateSourceCodes();
      expect(result).toEqual([]);
      expect(repository.getMaxRateSourceCodes).toHaveBeenCalled();
    });
  });
});
