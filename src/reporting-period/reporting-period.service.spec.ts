import { Test, TestingModule } from '@nestjs/testing';
import { ReportingPeriodRepository } from './reporting-period.repository';
import { ReportingPeriodService } from './reporting-period.service';

const mockReportingPeriodRepository = () => ({
  getQualLeeTestTypeCodes: jest.fn(() => []),
  findOne: jest.fn(),
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
});
