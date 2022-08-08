import { Test, TestingModule } from '@nestjs/testing';
import { RataFrequencyCode } from '../entities/rata-frequency-code.entity';
import { RataFrequencyCodeRepository } from './rata-frequency-code.repository';
import { RataFrequencyCodeService } from './rata-frequency-code.service';

const rataFreq = new RataFrequencyCode();

describe('RataFrequencyCodeService', () => {
  let service: RataFrequencyCodeService;
  let repository: RataFrequencyCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RataFrequencyCodeService,
        {
          provide: RataFrequencyCodeRepository,
          useFactory: () => ({
            find: jest.fn().mockResolvedValue([rataFreq]),
          }),
        },
      ],
    }).compile();

    service = module.get<RataFrequencyCodeService>(RataFrequencyCodeService);
    repository = module.get<RataFrequencyCodeRepository>(
      RataFrequencyCodeRepository,
    );
  });

  describe('getRataFrequencyCodes', () => {
    it('calls the getRataFrequencyCodes and returns rata-frquency-codes', async () => {
      const result = await service.getRataFrequencyCodes();
      expect(result).toEqual([rataFreq]);
      expect(repository.find).toHaveBeenCalled();
    });
  });
});
