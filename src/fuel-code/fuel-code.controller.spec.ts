import { Test, TestingModule } from '@nestjs/testing';
import { FuelCodeController } from './fuel-code.controller';
import { FuelCodeService } from './fuel-code.service';

const mockFuelCodeService = () => ({
  getFuelCodes: jest.fn().mockResolvedValue([]),
});

describe('FuelCodeController', () => {
  let controller: FuelCodeController;
  let service: FuelCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuelCodeController],
      providers: [
        {
          provide: FuelCodeService,
          useFactory: mockFuelCodeService,
        },
      ],
    }).compile();

    controller = module.get<FuelCodeController>(FuelCodeController);
    service = module.get<FuelCodeService>(FuelCodeService);
  });

  describe('getFuelCodes', () => {
    it('should call the FuelCodeService and return a list of fuel codes', async () => {
      expect(controller.getFuelCodes()).toEqual([]);
      expect(service.getFuelCodes).toHaveBeenCalled();
    });
  });
});
