import { Test, TestingModule } from '@nestjs/testing';
import { FuelIndicatorCodeController } from './fuel-indicator-code.controller';
import { FuelIndicatorCodeService } from './fuel-indicator-code.service';

const mockFuelIndicatorCodeService = () => ({
  getFuelIndicatorCodes: jest.fn().mockResolvedValue([]),
});

describe('FuelIndicatorCodeController', () => {
  let controller: FuelIndicatorCodeController;
  let service: FuelIndicatorCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuelIndicatorCodeController],
      providers: [
        {
          provide: FuelIndicatorCodeService,
          useFactory: mockFuelIndicatorCodeService,
        },
      ],
    }).compile();

    controller = module.get<FuelIndicatorCodeController>(
      FuelIndicatorCodeController,
    );
    service = module.get<FuelIndicatorCodeService>(FuelIndicatorCodeService);
  });

  describe('getFuelIndicatorCodes', () => {
    it('should call the FuelIndicatorCodeService and return a list of fuel indicator codes', async () => {
      expect(await controller.getFuelIndicatorCodes()).toEqual([]);
      expect(service.getFuelIndicatorCodes).toHaveBeenCalled();
    });
  });
});
