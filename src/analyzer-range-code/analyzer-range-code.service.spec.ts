import { Test, TestingModule } from '@nestjs/testing';
import { AnalyzerRangeCodeService } from './analyzer-range-code.service';

describe('AnalyzerRangeCodeService', () => {
  let service: AnalyzerRangeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyzerRangeCodeService],
    }).compile();

    service = module.get<AnalyzerRangeCodeService>(AnalyzerRangeCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
