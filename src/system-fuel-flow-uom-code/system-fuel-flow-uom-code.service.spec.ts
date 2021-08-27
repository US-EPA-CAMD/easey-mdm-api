import { Test, TestingModule } from '@nestjs/testing';
import { SystemFuelFlowUomCodeService } from './system-fuel-flow-uom-code.service';

describe('SystemFuelFlowUomCodeService', () => {
  let service: SystemFuelFlowUomCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemFuelFlowUomCodeService],
    }).compile();

    service = module.get<SystemFuelFlowUomCodeService>(SystemFuelFlowUomCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
