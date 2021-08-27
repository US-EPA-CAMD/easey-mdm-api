import { Test, TestingModule } from '@nestjs/testing';
import { SystemFuelFlowUomCodeController } from './system-fuel-flow-uom-code.controller';
import { SystemFuelFlowUomCodeService } from './system-fuel-flow-uom-code.service';

describe('SystemFuelFlowUomCodeController', () => {
  let controller: SystemFuelFlowUomCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemFuelFlowUomCodeController],
      providers: [SystemFuelFlowUomCodeService],
    }).compile();

    controller = module.get<SystemFuelFlowUomCodeController>(SystemFuelFlowUomCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
