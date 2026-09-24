import { Test } from '@nestjs/testing';
import { EntityManager } from 'typeorm';

import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodMap } from '../maps/reporting-period.map';
import { ReportingPeriodController } from './reporting-period.controller';
import { ReportingPeriodRepository } from './reporting-period.repository';
import { ReportingPeriodService } from './reporting-period.service';

describe('ReportingPeriodController', () => {
  let service: ReportingPeriodService;
  let controller: ReportingPeriodController;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [ReportingPeriodController],
      providers: [
        EntityManager,
        ReportingPeriodMap,
        ReportingPeriodService,
        ReportingPeriodRepository,
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

      jest
        .spyOn(service, 'getReportingPeriods')
        .mockResolvedValue(expectedResult);

      expect(await controller.getReportingPeriods({})).toStrictEqual({ items: expectedResult } );
    });

    it('should pass excludeCurrentQuarter when provided', async () => {
      const expectedResult: ReportingPeriodDTO[] = [];

      jest
        .spyOn(service, 'getReportingPeriods')
        .mockResolvedValue(expectedResult);

      await controller.getReportingPeriods({
        excludeCurrentQuarter: true,
      });

      expect(service.getReportingPeriods).toHaveBeenCalledWith(true);
    });
  });
});
