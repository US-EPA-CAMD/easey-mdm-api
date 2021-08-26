import { Test, TestingModule } from '@nestjs/testing';
import { MaximumFuelFlowRateCodeService } from './maximum-fuel-flow-rate-code.service';

describe('MaximumFuelFlowRateCodeService', () => {
  let service: MaximumFuelFlowRateCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaximumFuelFlowRateCodeService],
    }).compile();

    service = module.get<MaximumFuelFlowRateCodeService>(MaximumFuelFlowRateCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
