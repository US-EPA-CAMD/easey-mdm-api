import { Test, TestingModule } from '@nestjs/testing';
import { MaximumFuelFlowRateCodeController } from './maximum-fuel-flow-rate-code.controller';
import { MaximumFuelFlowRateCodeService } from './maximum-fuel-flow-rate-code.service';

const mockMaximumFuelFlowRateCodeService = () => ({
  getMaximumFuelFlowRateCodes: jest.fn(() => {
    return [];
  }),
});

describe('MaximumFuelFlowRateCodeController', () => {
  let maximumFuelFlowRateCodeController: MaximumFuelFlowRateCodeController;
  let maximumFuelFlowRateCodeService: MaximumFuelFlowRateCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaximumFuelFlowRateCodeController],
      providers: [
        {
          provide: MaximumFuelFlowRateCodeService,
          useFactory: mockMaximumFuelFlowRateCodeService,
        },
      ],
    }).compile();

    maximumFuelFlowRateCodeController = module.get<
      MaximumFuelFlowRateCodeController
    >(MaximumFuelFlowRateCodeController);
    maximumFuelFlowRateCodeService = module.get<MaximumFuelFlowRateCodeService>(
      MaximumFuelFlowRateCodeService,
    );
  });

  describe('getMaximumFuelFlowRateCodes', () => {
    it('should call the MaximumFuelFlowRateCodeService and return a list of maximum fuel flow rate codes', async () => {
      expect(
        maximumFuelFlowRateCodeController.getMaximumFuelFlowRateCodes(),
      ).toEqual([]);
      expect(
        maximumFuelFlowRateCodeService.getMaximumFuelFlowRateCodes,
      ).toHaveBeenCalled();
    });
  });
});
