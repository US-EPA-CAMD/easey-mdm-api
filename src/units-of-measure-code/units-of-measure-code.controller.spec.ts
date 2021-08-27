import { Test, TestingModule } from '@nestjs/testing';
import { UnitsOfMeasureCodeController } from './units-of-measure-code.controller';
import { UnitsOfMeasureCodeService } from './units-of-measure-code.service';

const mockUnitsOfMeasureCodeService = () => ({
  getUnitsOfMeasureCodes: jest.fn(() => []),
});

describe('UnitsOfMeasureCodeController', () => {
  let controller: UnitsOfMeasureCodeController;
  let service: UnitsOfMeasureCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitsOfMeasureCodeController],
      providers: [
        {
          provide: UnitsOfMeasureCodeService,
          useFactory: mockUnitsOfMeasureCodeService,
        },
      ],
    }).compile();

    controller = module.get<UnitsOfMeasureCodeController>(
      UnitsOfMeasureCodeController,
    );
    service = module.get<UnitsOfMeasureCodeService>(UnitsOfMeasureCodeService);
  });

  describe('getUnitofMeasureCodes', () => {
    it('should call the UnitsOfMeasureCodeService and return a list of unit of measure codes', () => {
      expect(controller.getUnitofMeasureCodes()).toEqual([]);
      expect(service.getUnitsOfMeasureCodes).toHaveBeenCalled();
    });
  });
});
