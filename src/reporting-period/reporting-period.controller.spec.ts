import { Test, TestingModule } from '@nestjs/testing';
import { ReportingPeriodController } from './reporting-period.controller';
import { ReportingPeriodService } from './reporting-period.service';

describe('ReportingPeriodController', () => {
  let controller: ReportingPeriodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportingPeriodController],
      providers: [ReportingPeriodService],
    }).compile();

    controller = module.get<ReportingPeriodController>(ReportingPeriodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
