import { Test, TestingModule } from '@nestjs/testing';
import { ShapeCodeController } from './shape-code.controller';
import { ShapeCodeService } from './shape-code.service';

const mockShapeCodeService = () => ({
  getShapeCodes: jest.fn(() => []),
});

describe('ShapeCodeController', () => {
  let controller: ShapeCodeController;
  let service: ShapeCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShapeCodeController],
      providers: [
        {
          provide: ShapeCodeService,
          useFactory: mockShapeCodeService,
        },
      ],
    }).compile();

    controller = module.get<ShapeCodeController>(ShapeCodeController);
    service = module.get<ShapeCodeService>(ShapeCodeService);
  });

  describe('getMethodCodes', () => {
    it('should call the ShapeCodeService and return a list of shape codes', () => {
      expect(controller.getShapeCodes()).toEqual([]);
      expect(service.getShapeCodes).toHaveBeenCalled();
    });
  });
});
