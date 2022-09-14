import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { HeatInputOilController } from './heat-input-oil.controller';
import { HeatInputOilService } from './heat-input-oil.service';

const mockHeatInputOilService = () => ({
  getHeatInputOils: jest.fn(() => []),
});

describe('HeatInputOilController', () => {
  let controller: HeatInputOilController;
  let service: HeatInputOilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [HeatInputOilController],
      providers: [
        {
          provide: HeatInputOilService,
          useFactory: mockHeatInputOilService,
        },
      ],
    }).compile();

    controller = module.get<HeatInputOilController>(HeatInputOilController);
    service = module.get<HeatInputOilService>(HeatInputOilService);
  });

  describe('getHeatInputOils', () => {
    it('should call the HeatInputOilService and return a list of test basis codes', async () => {
      expect(await controller.getHeatInputOils()).toEqual([]);
      expect(service.getHeatInputOils).toHaveBeenCalled();
    });
  });
});
