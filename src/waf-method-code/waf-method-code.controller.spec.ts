import { Test, TestingModule } from '@nestjs/testing';
import { WafMethodCodeController } from './waf-method-code.controller';
import { WafMethodCodeService } from './waf-method-code.service';

const mockWafMethodCodeService = () => ({
  getWafMethodCodes: jest.fn(() => []),
});

describe('WafMethodCodeController', () => {
  let controller: WafMethodCodeController;
  let service: WafMethodCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WafMethodCodeController],
      providers: [
        {
          provide: WafMethodCodeService,
          useFactory: mockWafMethodCodeService,
        },
      ],
    }).compile();

    controller = module.get<WafMethodCodeController>(WafMethodCodeController);
    service = module.get<WafMethodCodeService>(WafMethodCodeService);
  });

  describe('getUnitofMeasureCodes', () => {
    it('should call the WafMethodCodeService and return a list of unit of measure codes', () => {
      expect(controller.getWafMethodCodes()).toEqual([]);
      expect(service.getWafMethodCodes).toHaveBeenCalled();
    });
  });
});
