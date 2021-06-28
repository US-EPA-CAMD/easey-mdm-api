import { Test, TestingModule } from '@nestjs/testing';
import { BypassApproachCodeService } from './bypass-approach-code.service';

describe('BypassApproachCodesService', () => {
  let service: BypassApproachCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BypassApproachCodeService],
    }).compile();

    service = module.get<BypassApproachCodeService>(
      BypassApproachCodeService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
