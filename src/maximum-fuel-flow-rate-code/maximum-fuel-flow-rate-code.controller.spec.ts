import { Test, TestingModule } from '@nestjs/testing';
import { MaximumFuelFlowRateCodeController } from './maximum-fuel-flow-rate-code.controller';
import { MaximumFuelFlowRateCodeService } from './maximum-fuel-flow-rate-code.service';

describe('MaximumFuelFlowRateCodeController', () => {
  let controller: MaximumFuelFlowRateCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaximumFuelFlowRateCodeController],
      providers: [MaximumFuelFlowRateCodeService],
    }).compile();

    controller = module.get<MaximumFuelFlowRateCodeController>(MaximumFuelFlowRateCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
