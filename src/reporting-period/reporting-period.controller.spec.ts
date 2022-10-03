import { Test } from '@nestjs/testing';

import { ReportingPeriodController } from './reporting-period.controller';
import { ReportingPeriodRepository } from './reporting-period.repository';
import { ReportingPeriodService } from './reporting-period.service';
import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodMap } from '../maps/reporting-period.map';

describe('ReportingPeriodController', () => {
  let service: ReportingPeriodService;
  let controller: ReportingPeriodController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [ReportingPeriodController],
      providers: [
        ReportingPeriodMap,
        ReportingPeriodService,
        ReportingPeriodRepository
      ],
    }).compile();

    controller = module.get(ReportingPeriodController);
    service = module.get(ReportingPeriodService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  describe('getReportingPeriods', () => {

    it('should return a list of reporting periods', async () => {
      const expectedResult: ReportingPeriodDTO[] = [];

      jest.spyOn(
        service,
        'getReportingPeriods'
      ).mockResolvedValue(
        expectedResult
      );

      expect(
        await controller.getReportingPeriods()
      ).toBe(
        expectedResult,
      );
    });

  });
});
