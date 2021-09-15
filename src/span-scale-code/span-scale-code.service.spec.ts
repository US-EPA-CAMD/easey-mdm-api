import { Test, TestingModule } from '@nestjs/testing';
import { SpanScaleCodeService } from './span-scale-code.service';

describe('SpanScaleCodeService', () => {
  let service: SpanScaleCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpanScaleCodeService],
    }).compile();

    service = module.get<SpanScaleCodeService>(SpanScaleCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
