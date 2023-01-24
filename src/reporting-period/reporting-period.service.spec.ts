import { Test } from '@nestjs/testing';

import { ReportingPeriodRepository } from './reporting-period.repository';
import { ReportingPeriodService } from './reporting-period.service';
import { ReportingPeriodMap } from '../maps/reporting-period.map';

const mockRepository = () => ({
  find: jest.fn(),
});

describe('ReportingPeriodService', () => {
  let repository: any;
  let service: ReportingPeriodService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ReportingPeriodMap,
        ReportingPeriodService,
        {
          provide: ReportingPeriodRepository,
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get(ReportingPeriodService);
    repository = module.get(ReportingPeriodRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });  

  describe('getReportingPeriods', () => {

    it('should return a list of reporting periods', async () => {
      repository.find.mockResolvedValue([]);
      const results = await service.getReportingPeriods();

      expect(repository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });
  });
});
