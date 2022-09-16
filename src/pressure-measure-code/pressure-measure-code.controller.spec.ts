import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule } from '@us-epa-camd/easey-common/logger';
import { PressureMeasureCodeController } from './pressure-measure-code.controller';
import { PressureMeasureCodeService } from './pressure-measure-code.service';

const mockPressureMeasureCodeService = () => ({
  getPressureMeasureCodes: jest.fn(() => []),
});

describe('PressureMeasureCodeController', () => {
  let controller: PressureMeasureCodeController;
  let service: PressureMeasureCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LoggerModule],
      controllers: [PressureMeasureCodeController],
      providers: [
        {
          provide: PressureMeasureCodeService,
          useFactory: mockPressureMeasureCodeService,
        },
      ],
    }).compile();

    controller = module.get<PressureMeasureCodeController>(PressureMeasureCodeController);
    service = module.get<PressureMeasureCodeService>(PressureMeasureCodeService);
  });

  describe('getPressureMeasureCodes', () => {
    it('should call the PressureMeasureCodeService and return a list of pressure measure codes', async () => {
      expect(await controller.getPressureMeasureCodes()).toEqual([]);
      expect(service.getPressureMeasureCodes).toHaveBeenCalled();
    });
  });
});
