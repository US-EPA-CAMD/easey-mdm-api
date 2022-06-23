import { Test, TestingModule } from '@nestjs/testing';
import { ReportingPeriodDTO } from '../dto/reporting-period.dto';
import { ReportingPeriodController } from './reporting-period.controller';
import { ReportingPeriodService } from './reporting-period.service';

const mockReportingPeriodService = () => ({
  getReportingPeriods: jest.fn(() => [new ReportingPeriodDTO()]),
});

describe('ReportingPeriodController', () => {
  let controller: ReportingPeriodController;
  let service: ReportingPeriodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportingPeriodController],
      providers: [
        {
          provide: ReportingPeriodService,
          useFactory: mockReportingPeriodService,
        },
      ],
    }).compile();

    controller = module.get<ReportingPeriodController>(
      ReportingPeriodController,
    );
    service = module.get<ReportingPeriodService>(ReportingPeriodService);
  });

  describe('getReportingPeriods', () => {
    it('should call the ReportingPeriodService and return a list of reporting periods', () => {
      expect(controller.getReportingPeriods()).toEqual([
        new ReportingPeriodDTO(),
      ]);
      expect(service.getReportingPeriods).toHaveBeenCalled();
    });
  });
});
