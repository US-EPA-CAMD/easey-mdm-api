import { Test, TestingModule } from '@nestjs/testing';
import { AnalyzerRangeCodeController } from './analyzer-range-code.controller';
import { AnalyzerRangeCodeService } from './analyzer-range-code.service';

describe('AnalyzerRangeCodeController', () => {
  let controller: AnalyzerRangeCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalyzerRangeCodeController],
      providers: [AnalyzerRangeCodeService],
    }).compile();

    controller = module.get<AnalyzerRangeCodeController>(AnalyzerRangeCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
