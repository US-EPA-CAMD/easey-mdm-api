import { Test, TestingModule } from '@nestjs/testing';
import { AnalyzerRangeCodeController } from './analyzer-range-code.controller';
import { AnalyzerRangeCodeService } from './analyzer-range-code.service';

const mockAnalyzerRangeCodeService = () => ({
  getAnalyzerRangeCodes: jest.fn(() => {
    return [];
  }),
});

describe('AnalyzerRangeCodeController', () => {
  let analyzerRangeCodeController: AnalyzerRangeCodeController;
  let analyzerRangeCodeService: AnalyzerRangeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalyzerRangeCodeController],
      providers: [
        {
          provide: AnalyzerRangeCodeService,
          useFactory: mockAnalyzerRangeCodeService,
        },
      ],
    }).compile();

    analyzerRangeCodeController = module.get<AnalyzerRangeCodeController>(
      AnalyzerRangeCodeController,
    );
    analyzerRangeCodeService = module.get<AnalyzerRangeCodeService>(
      AnalyzerRangeCodeService,
    );
  });

  describe('getAnalyzerRangeCodes', () => {
    it('should call the AnalyzerRangeCodeService and return a list of analyzer range codes', async () => {
      expect(analyzerRangeCodeController.getAnalyzerRangeCodes()).toEqual([]);
      expect(analyzerRangeCodeService.getAnalyzerRangeCodes).toHaveBeenCalled();
    });
  });
});
