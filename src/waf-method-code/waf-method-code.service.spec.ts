import { Test, TestingModule } from '@nestjs/testing';
import { WafMethodCodeService } from './waf-method-code.service';

describe('WafMethodCodeService', () => {
  let service: WafMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WafMethodCodeService],
    }).compile();

    service = module.get<WafMethodCodeService>(WafMethodCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
