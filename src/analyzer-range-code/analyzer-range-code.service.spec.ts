import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { AnalyzerRangeCodeRepository } from './analyzer-range-code.repository';
import { AnalyzerRangeCodeService } from './analyzer-range-code.service';

const mockAnalyzerRangeCodeRepository = () => ({
  getAnalyzerRangeCodes: jest.fn(() => []),
  findOne: jest.fn(),
});

describe('AnalyzerRangeCodeService', () => {
  let analyzerRangeCodeService: AnalyzerRangeCodeService;
  let analyzerRangeCodeRepository: AnalyzerRangeCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, LoggerModule],
      providers: [
        AnalyzerRangeCodeService,
        {
          provide: AnalyzerRangeCodeRepository,
          useFactory: mockAnalyzerRangeCodeRepository,
        },
        ConfigService,
      ],
    }).compile();

    analyzerRangeCodeService = module.get<AnalyzerRangeCodeService>(
      AnalyzerRangeCodeService,
    );
    analyzerRangeCodeRepository = module.get<AnalyzerRangeCodeRepository>(
      AnalyzerRangeCodeRepository,
    );
  });

  describe('getAnalyzerRangeCodes', () => {
    it('calls the AnalyzerRangeCodeRepository and returns a analyzer range codes', async () => {
      const result = await analyzerRangeCodeService.getAnalyzerRangeCodes();
      expect(result).toEqual([]);
      expect(
        analyzerRangeCodeRepository.getAnalyzerRangeCodes,
      ).toHaveBeenCalled();
    });
  });
});
