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
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-06-30T12:00:00.000Z'));

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

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('getReportingPeriods', () => {

    it('should return a list of reporting periods', async () => {
      repository.find.mockResolvedValue([]);
      const results = await service.getReportingPeriods();

      expect(repository.find).toHaveBeenCalled();
      expect(results).toEqual([]);
    });

    it('should exclude the current quarter when requested', async () => {
      repository.find.mockResolvedValue([]);

      await service.getReportingPeriods(true);

      const findArgs = repository.find.mock.calls[0][0];
      expect(findArgs.order).toEqual({
        calendarYear: 'DESC',
        quarter: 'DESC',
      });
      expect(findArgs.where[1].calendarYear).toEqual(2026);
      expect(findArgs.where[1].quarter._type).toEqual('lessThan');
      expect(findArgs.where[1].quarter._value).toEqual(2);
    });

    it('should include the current quarter by default', async () => {
      repository.find.mockResolvedValue([]);

      await service.getReportingPeriods(false);

      const findArgs = repository.find.mock.calls[0][0];
      expect(findArgs.where[1].calendarYear).toEqual(2026);
      expect(findArgs.where[1].quarter._type).toEqual('lessThanOrEqual');
      expect(findArgs.where[1].quarter._value).toEqual(2);
    });
  });
});
