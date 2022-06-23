import { Test, TestingModule } from '@nestjs/testing';
import { ReportingPeriodService } from './reporting-period.service';

describe('ReportingPeriodService', () => {
  let service: ReportingPeriodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportingPeriodService],
    }).compile();

    service = module.get<ReportingPeriodService>(ReportingPeriodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
