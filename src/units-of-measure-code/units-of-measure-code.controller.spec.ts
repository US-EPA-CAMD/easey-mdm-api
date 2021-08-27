import { Test, TestingModule } from '@nestjs/testing';
import { SystemFuelFlowUOMCodeController } from './units-of-measure-code.controller';
import { SystemFuelFlowUOMCodeService } from './units-of-measure-code.service';

const mockSystemFuelFlowUOMCodeService = () => ({
  getSystemFuelFlowUOMCodes: jest.fn(() => []),
});

describe('SystemFuelFlowUOMCodeController', () => {
  let controller: SystemFuelFlowUOMCodeController;
  let systemFuelFlowUOMCodeService: SystemFuelFlowUOMCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemFuelFlowUOMCodeController],
      providers: [
        {
          provide: SystemFuelFlowUOMCodeService,
          useFactory: mockSystemFuelFlowUOMCodeService,
        },
      ],
    }).compile();

    controller = module.get<SystemFuelFlowUOMCodeController>(
      SystemFuelFlowUOMCodeController,
    );
    systemFuelFlowUOMCodeService = module.get<SystemFuelFlowUOMCodeService>(
      SystemFuelFlowUOMCodeService,
    );
  });

  describe('getMethodCodes', () => {
    it('should call the SystemFuelFlowUOMCodeService and return a list of system flow uom codes', () => {
      expect(controller.getMethodCodes()).toEqual([]);
      expect(
        systemFuelFlowUOMCodeService.getSystemFuelFlowUOMCodes,
      ).toHaveBeenCalled();
    });
  });
});
