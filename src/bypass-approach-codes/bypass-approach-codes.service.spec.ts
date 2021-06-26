import { Test, TestingModule } from '@nestjs/testing';
import { BypassApproachCodesService } from './bypass-approach-codes.service';

describe('BypassApproachCodesService', () => {
  let service: BypassApproachCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BypassApproachCodesService],
    }).compile();

    service = module.get<BypassApproachCodesService>(BypassApproachCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
