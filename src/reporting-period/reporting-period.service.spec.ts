import { Test, TestingModule } from '@nestjs/testing';
import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodRepository } from './reporting-period.repository';
import { ReportingPeriodService } from './reporting-period.service';

const mockReportingPeriodRepository = () => ({
  find: jest.fn().mockResolvedValue([]),
});

describe('ReportingPeriodService', () => {
  let service: ReportingPeriodService;
  let repository: ReportingPeriodRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportingPeriodService,
        {
          provide: ReportingPeriodRepository,
          useFactory: mockReportingPeriodRepository,
        },
      ],
    }).compile();

    service = module.get<ReportingPeriodService>(ReportingPeriodService);
    repository = module.get<ReportingPeriodRepository>(
      ReportingPeriodRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getReportingPeriods', () => {
    it('should return reporting period up until current year and current quarter', async () => {
      const result = await service.getReportingPeriods();
      expect(result).toEqual([]);
    });
  });
});
