import { Test, TestingModule } from '@nestjs/testing';
import { SpanMethodCodeService } from './span-method-code.service';

describe('SpanMethodCodeService', () => {
  let service: SpanMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpanMethodCodeService],
    }).compile();

    service = module.get<SpanMethodCodeService>(SpanMethodCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
