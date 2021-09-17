import { Test, TestingModule } from '@nestjs/testing';
import { SpanScaleCodeController } from './span-scale-code.controller';
import { SpanScaleCodeService } from './span-scale-code.service';

const mockSpanScaleCodeService = () => ({
  getSpanScaleCodes: jest.fn(() => {
    return [];
  }),
});

describe('SpanScaleCodeController', () => {
  let controller: SpanScaleCodeController;
  let service: SpanScaleCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpanScaleCodeController],
      providers: [
        {
          provide: SpanScaleCodeService,
          useFactory: mockSpanScaleCodeService,
        },
      ],
    }).compile();

    controller = module.get<SpanScaleCodeController>(SpanScaleCodeController);
    service = module.get<SpanScaleCodeService>(SpanScaleCodeService);
  });

  describe('getSpanScaleCodes', () => {
    it('should call the SpanScaleCodeService and return a list of span scale codes', async () => {
      expect(controller.getSpanScaleCodes()).toEqual([]);
      expect(service.getSpanScaleCodes).toHaveBeenCalled();
    });
  });
});
